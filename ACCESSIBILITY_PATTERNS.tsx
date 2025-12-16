/* Accessibility Quick Reference Guide for Developers */

/**
 * KEYBOARD NAVIGATION PATTERN
 * Use this pattern for all interactive elements:
 */
const KeyboardAccessibleButton = () => {
  const handleAction = () => {
    // Your action here
  };

  return (
    <button
      onClick={handleAction}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleAction();
        }
      }}
      aria-label="Descriptive label for screen readers"
    >
      Button Text
    </button>
  );
};

/**
 * FORM INPUT PATTERN
 * Always associate labels with inputs:
 */
const AccessibleFormInput = () => {
  return (
    <div>
      <label htmlFor="unique-input-id">
        Field Label
      </label>
      <input
        id="unique-input-id"
        type="text"
        name="fieldName"
        required
        aria-required="true"
        placeholder="Helpful placeholder"
      />
    </div>
  );
};

/**
 * IMAGE PATTERN
 * Use descriptive alt text:
 */
const AccessibleImage = () => {
  return (
    <img
      src="/path/to/image.jpg"
      alt="Detailed description of image content and context"
      loading="lazy"
      decoding="async"
    />
  );
};

/**
 * DECORATIVE ICON PATTERN
 * Hide decorative icons from screen readers:
 */
const DecorativeIcon = () => {
  return (
    <div role="img" aria-label="Icon name">
      <IconComponent aria-hidden="true" />
    </div>
  );
};

/**
 * LINK PATTERN
 * Provide descriptive link text:
 */
const AccessibleLink = () => {
  return (
    <a
      href="/destination"
      aria-label="Descriptive action and destination"
    >
      Link Text
    </a>
  );
};

/**
 * MODAL/DIALOG PATTERN
 * Ensure modals are accessible:
 */
const AccessibleModal = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <h2 id="modal-title">Modal Title</h2>
        <button
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        {/* Modal content */}
      </div>
    </>
  );
};

/**
 * CAROUSEL/SLIDER PATTERN
 * Make carousels keyboard accessible:
 */
const AccessibleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => setCurrentIndex(prev => prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev - 1);

  return (
    <div role="region" aria-label="Image carousel">
      <button
        onClick={prevSlide}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            prevSlide();
          }
        }}
        aria-label="Previous slide"
      >
        Previous
      </button>

      <div role="group" aria-label={`Slide ${currentIndex + 1}`}>
        {/* Slide content */}
      </div>

      <button
        onClick={nextSlide}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
          }
        }}
        aria-label="Next slide"
      >
        Next
      </button>

      {/* Indicators */}
      <div role="group" aria-label="Slide indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * LOADING STATE PATTERN
 * Indicate loading states to screen readers:
 */
const LoadingButton = ({ isLoading }) => {
  return (
    <button
      disabled={isLoading}
      aria-busy={isLoading}
      aria-label={isLoading ? 'Loading...' : 'Submit'}
    >
      {isLoading ? 'Loading...' : 'Submit'}
    </button>
  );
};

/**
 * SKIP LINK PATTERN
 * Add at the top of your main component:
 */
const PageWithSkipLink = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        {/* Page content */}
      </main>
    </>
  );
};

/**
 * FOCUS MANAGEMENT
 * Manage focus for better UX:
 */
const FocusManagement = () => {
  const firstFocusableElement = useRef(null);

  useEffect(() => {
    // Focus first element when component mounts
    firstFocusableElement.current?.focus();
  }, []);

  return (
    <div>
      <button ref={firstFocusableElement}>
        First Focusable Element
      </button>
    </div>
  );
};

/**
 * MINIMUM CONTRAST RATIOS (WCAG AA)
 * - Normal text: 4.5:1
 * - Large text (18pt+): 3:1
 * - UI components: 3:1
 */

/**
 * MINIMUM TOUCH TARGET SIZES
 * - 44x44px for all interactive elements
 * - Adequate spacing between targets
 */

/**
 * HEADING HIERARCHY
 * Maintain proper heading order:
 * <h1> - Page title (one per page)
 * <h2> - Section headings
 * <h3> - Subsection headings
 * Don't skip levels
 */

export {
  KeyboardAccessibleButton,
  AccessibleFormInput,
  AccessibleImage,
  DecorativeIcon,
  AccessibleLink,
  AccessibleModal,
  AccessibleCarousel,
  LoadingButton,
  PageWithSkipLink,
  FocusManagement,
};
