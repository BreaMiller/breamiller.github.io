import { InfiniteSlider } from './InfiniteSlider';

const aiTools = [
  { id: 1, name: 'Opus Clip', logo: 'https://asset.brandfetch.io/idMyFW0O1q/ide61u_rax.png' },
  { id: 2, name: 'Runway', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/runway-ai-icon.png' },
  { id: 3, name: 'Google Gemini', logo: 'https://www.gstatic.com/images/branding/product/1x/gemini_512dp.png' },
  { id: 4, name: 'Eleven Labs', logo: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg' },
  { id: 5, name: 'Descript', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5a397f4bb894c90c086a7587/0x0.png' },
  { id: 6, name: 'Adobe Firefly', logo: 'https://cdn-icons-png.flaticon.com/512/731/731970.png' },
  { id: 7, name: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { id: 8, name: 'OpenArt', logo: 'https://techzehn.com/wp-content/uploads/2025/08/OpenArt-Logo.png' },
  { id: 9, name: 'Pixlr', logo: 'https://pixlr.com/blog/wp-content/uploads/2022/03/cropped-cropped-Black-icon.png' },
  { id: 10, name: 'Midjourney', logo: 'https://1000logos.net/wp-content/uploads/2025/07/Midjourney-Logo.png' },
  { id: 11, name: 'Claude', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude.png' },
];

export const AIToolsSection = () => {
  return (
    <section
      className="w-full py-20 md:py-32 pb-48 md:pb-72"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container max-w-7xl mx-auto px-3 md:px-4 mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #ec4899 50%, #6366f1 75%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          My Favorite AI Tools
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          Powerful AI tools that fuel my creative process and innovation
        </p>
      </div>

      <InfiniteSlider gap={20} duration={30} direction="horizontal" reverse={false}>
        {aiTools.map((tool) => (
          <div
            key={tool.id}
            className="flex-shrink-0 flex items-center justify-center px-8 py-6 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group"
            style={{
              minWidth: '200px',
              background: "linear-gradient(135deg, rgba(15, 15, 15, 0.8) 0%, rgba(30, 30, 30, 0.6) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <img 
                src={tool.logo}
                alt={tool.name}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 object-contain"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
              <span className="text-white font-semibold text-center whitespace-nowrap text-sm">
                {tool.name}
              </span>
            </div>
          </div>
        ))}
      </InfiniteSlider>

      <div className="container max-w-7xl mx-auto px-3 md:px-4 mt-20 flex justify-center">
        <button
          disabled
          style={{
            background: "transparent",
            border: "1px solid rgba(236, 72, 153, 0.3)",
            borderRadius: "50px",
            padding: "16px 32px",
            color: "#ec4899",
            fontSize: "14px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            cursor: "not-allowed",
            opacity: 0.8,
          }}
        >
          Directory Coming Soon
        </button>
      </div>
    </section>
  );
};
