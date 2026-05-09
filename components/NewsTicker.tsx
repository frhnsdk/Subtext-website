'use client'

const messages = [
  'Subtext can technically be used to conceal criminal activity — we do not condone this under any circumstance.',
  'This app is built for survivors, activists, journalists, and anyone facing real danger — not for those who cause it.',
  'We cooperate fully with lawful investigations. Subtext is not a shield for crime.',
  'If you are using Subtext to harm others, stop. This tool was built to protect people, not to protect predators.',
  'Use your spaces responsibly. Every feature here exists to keep the vulnerable safe — not to enable wrongdoing.',
]

const track = [...messages, ...messages]

export default function NewsTicker() {
  return (
    <div className="w-full relative">
      {/* Top gradient border */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #2563EB 25%, #93C5FD 50%, #2563EB 75%, transparent 100%)', opacity: 0.9 }} />

      <div
        className="w-full overflow-hidden relative"
        style={{ background: 'linear-gradient(90deg, #0B1220 0%, #0f1e3d 50%, #0B1220 100%)' }}
      >
      {/* Left fade + label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center"
        style={{ background: 'linear-gradient(90deg, #0B1220 55%, transparent 100%)' }}
      >
        <div className="flex items-center gap-3 pl-5 pr-8">
          {/* Pulsing bars — blue themed */}
          <div className="flex gap-[3px] items-end h-4">
            {[0.6, 1, 0.75].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full"
                style={{
                  height: `${h * 100}%`,
                  background: '#3B82F6',
                  animation: `bar-pulse 1.1s ease-in-out ${i * 0.18}s infinite`,
                  opacity: 0.9,
                }}
              />
            ))}
          </div>
          <span
            className="text-[10px] font-black tracking-[0.22em] uppercase"
            style={{ color: '#60A5FA' }}
          >
            Notice
          </span>
          {/* Divider */}
          <div className="w-px h-3 bg-blue-800" />
        </div>
      </div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0B1220 40%, transparent 100%)' }}
      />

      {/* Scrolling track */}
      <div className="flex py-3 pl-44">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'ticker 55s linear infinite' }}
        >
          {track.map((msg, i) => (
            <span key={i} className="flex items-center">
              <span
                className="text-[13px] font-medium tracking-wide"
                style={{ color: '#BFDBFE' }}
              >
                {msg}
              </span>
              <span
                className="mx-10 inline-block w-[1px] h-3 align-middle"
                style={{ background: 'rgba(37,99,235,0.4)' }}
              />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bar-pulse {
          0%, 100% { transform: scaleY(0.5); opacity: 0.5; }
          50%       { transform: scaleY(1);   opacity: 1; }
        }
      `}</style>
      </div>

      {/* Bottom gradient border */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #2563EB 25%, #93C5FD 50%, #2563EB 75%, transparent 100%)', opacity: 0.9 }} />
    </div>
  )
}
