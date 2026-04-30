import WordsPullUp from './WordsPullUp';

/**
 * Demo component to test WordsPullUp animation
 * This can be imported in App.tsx to verify the component works
 */
export default function WordsPullUpDemo() {
  return (
    <div className="min-h-screen bg-black p-8 space-y-16">
      {/* Demo 1: Basic text animation */}
      <div className="space-y-4">
        <h2 className="text-white text-sm">Demo 1: Basic Text</h2>
        <WordsPullUp 
          text="Hello World Animation" 
          className="text-4xl font-bold text-white"
        />
      </div>

      {/* Demo 2: With asterisk (like "Prisma") */}
      <div className="space-y-4">
        <h2 className="text-white text-sm">Demo 2: With Asterisk (Prisma)</h2>
        <WordsPullUp 
          text="Prisma" 
          className="text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
          style={{ color: '#E1E0CC' }}
          showAsterisk={true}
        />
      </div>

      {/* Demo 3: Multiple words with custom styling */}
      <div className="space-y-4">
        <h2 className="text-white text-sm">Demo 3: Multiple Words</h2>
        <WordsPullUp 
          text="Studio grade workflows for visionary creators" 
          className="text-3xl text-primary"
        />
      </div>

      {/* Spacer to allow scrolling and trigger animations */}
      <div className="h-screen"></div>
    </div>
  );
}
