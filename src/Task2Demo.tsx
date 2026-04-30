/**
 * Task 2 Demo Component
 * 
 * This component demonstrates that all fonts and CSS utilities from Task 2 are working correctly.
 * Requirements: 1.6, 1.7, 1.8, 1.9
 */

export default function Task2Demo() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#DEDBC8' }}>
            Task 2 Verification Demo
          </h1>
          <p className="text-gray-400">Fonts and Custom CSS Utilities</p>
        </div>

        {/* Requirement 1.6: Almarai Font Weights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            ✅ Requirement 1.6: Almarai Font (weights: 300, 400, 700, 800)
          </h2>
          <div className="space-y-2 pl-4">
            <p className="font-light text-xl">Font Weight 300 (Light): The quick brown fox jumps over the lazy dog</p>
            <p className="font-normal text-xl">Font Weight 400 (Normal): The quick brown fox jumps over the lazy dog</p>
            <p className="font-bold text-xl">Font Weight 700 (Bold): The quick brown fox jumps over the lazy dog</p>
            <p className="font-extrabold text-xl">Font Weight 800 (Extra Bold): The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Requirement 1.7: Instrument Serif Italic */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            ✅ Requirement 1.7: Instrument Serif (italic)
          </h2>
          <div className="pl-4">
            <p className="font-serif italic text-2xl" style={{ color: '#E1E0CC' }}>
              This text uses Instrument Serif in italic style
            </p>
            <p className="font-serif italic text-xl text-gray-300 mt-2">
              "A self-taught director with a passion for visual storytelling."
            </p>
          </div>
        </section>

        {/* Requirement 1.8: Global Default Font */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            ✅ Requirement 1.8: Almarai as Global Default Font
          </h2>
          <div className="pl-4">
            <p className="text-lg">
              This paragraph uses the default body font, which should be Almarai. 
              No explicit font-family class is applied, demonstrating that Almarai 
              is correctly set as the global default in index.css.
            </p>
          </div>
        </section>

        {/* Requirement 1.9: noise-overlay utility */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            ✅ Requirement 1.9a: noise-overlay CSS Utility
          </h2>
          <div className="pl-4">
            <div className="relative h-64 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden">
              <div className="noise-overlay"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-2xl font-bold mb-2">Noise Overlay Effect</p>
                  <p className="text-sm text-gray-300">
                    SVG feTurbulence filter at 70% opacity with overlay blend mode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirement 1.9: bg-noise utility */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            ✅ Requirement 1.9b: bg-noise CSS Utility
          </h2>
          <div className="pl-4">
            <div className="bg-noise h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center z-10 relative">
                <p className="text-2xl font-bold mb-2">Background Noise Effect</p>
                <p className="text-sm text-gray-300">
                  SVG feTurbulence filter at 15% opacity via ::before pseudo-element
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            Side-by-Side Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-4">
            <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-center font-bold">No Noise<br/>(Plain Background)</p>
            </div>
            <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden">
              <div className="noise-overlay"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="text-center font-bold">noise-overlay<br/>(70% opacity)</p>
              </div>
            </div>
            <div className="bg-noise h-48 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-center font-bold relative z-10">bg-noise<br/>(15% opacity)</p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2" style={{ color: '#DEDBC8' }}>
            Technical Implementation Details
          </h2>
          <div className="pl-4 space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-400">Google Fonts (index.html)</h3>
              <code className="text-xs text-gray-300 block">
                &lt;link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet" /&gt;
              </code>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-400">Global Font (index.css)</h3>
              <code className="text-xs text-gray-300 block">
                body &#123; font-family: 'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; &#125;
              </code>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-400">SVG Noise Filter</h3>
              <code className="text-xs text-gray-300 block break-all">
                feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
