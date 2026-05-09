'use client'

import { useEffect, useState } from 'react'
import { Lock, Check, ArrowLeft, Phone, Send, Smile, Paperclip } from 'lucide-react'

// ── Chat content per stage ───────────────────────────────────────────
type ChatMessage = { text: string; fromMe: boolean; delay: number }

const friendChat = {
  name: 'Alice',
  avatar: 'A',
  avatarBg: '#3B82F6',
  status: 'online',
  messages: [
    { text: 'Hey! 👋', fromMe: false, delay: 200 },
    { text: "How's it going?", fromMe: false, delay: 700 },
    { text: 'Pretty good!', fromMe: true, delay: 1300 },
    { text: 'Just got coffee ☕', fromMe: false, delay: 2000 },
    { text: 'Working today?', fromMe: true, delay: 2500 },
  ] as ChatMessage[],
}

const secretChat = {
  name: 'J',
  avatar: 'J',
  avatarBg: '#10B981',
  status: 'private space',
  messages: [
    { text: 'Did you see it?', fromMe: false, delay: 200 },
    { text: 'Just now 👀', fromMe: true, delay: 700 },
    { text: "Don't tell anyone", fromMe: false, delay: 1300 },
    { text: 'Promise 🤝', fromMe: true, delay: 1900 },
    { text: 'Talk later ✨', fromMe: false, delay: 2500 },
  ] as ChatMessage[],
}

const stages = [
  {
    type: 'chat' as const,
    chat: friendChat,
    label: 'Regular space',
    sublabel: 'Chatting normally',
    accent: '#3B82F6',
    duration: 4000,
  },
  {
    type: 'lock' as const,
    label: 'Locked',
    sublabel: 'Enter your password...',
    accent: '#9333EA',
    duration: 3200,
  },
  {
    type: 'chat' as const,
    chat: secretChat,
    label: 'Infinity Space',
    sublabel: "You're in your hidden world",
    accent: '#10B981',
    duration: 4000,
    isSecret: true,
  },
]

// ── Flying messages between phones ───────────────────────────────────
const flyingMsgs = [
  { text: 'Hey! 👋', delay: 0, direction: 'right', color: '#3B82F6' },
  { text: '❤️', delay: 1.5, direction: 'left', color: '#10B981' },
  { text: '🔒', delay: 3, direction: 'right', color: '#9333EA' },
  { text: '✨', delay: 4.5, direction: 'left', color: '#EC4899' },
]

export default function PhoneConnection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage((s) => (s + 1) % stages.length)
    }, stages[stage].duration)
    return () => clearTimeout(timer)
  }, [stage])

  const current = stages[stage]

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1400px' }}
    >
      {/* Soft scene glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${current.accent}25 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Connection beam */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[3px] pointer-events-none rounded-full transition-opacity duration-500"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.4) 20%, rgba(37,99,235,0.6) 50%, rgba(96,165,250,0.4) 80%, transparent 100%)',
          filter: 'blur(2px)',
          opacity: current.type === 'lock' ? 0.2 : 0.7,
        }}
      />

      {/* Left phone — friend's view (static loop) */}
      <div
        className="phone-tilt-left absolute"
        style={{
          left: '4%',
          top: '50%',
          transform: 'translateY(-50%) rotateY(22deg) rotateZ(-4deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <PhoneFrame accent="#3B82F6">
          <ChatUI key={`left-${stage}`} chat={friendChat} mirrored />
        </PhoneFrame>
      </div>

      {/* Right phone — cycling demo */}
      <div
        className="phone-tilt-right absolute"
        style={{
          right: '4%',
          top: '50%',
          transform: 'translateY(-50%) rotateY(-22deg) rotateZ(4deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <PhoneFrame accent={current.accent} key={`right-${stage}`}>
          {current.type === 'chat' ? (
            <ChatUI chat={current.chat} secret={current.isSecret} />
          ) : (
            <LockUI />
          )}
        </PhoneFrame>
      </div>

      {/* Stage caption */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-md transition-all duration-500"
          style={{ minWidth: '220px' }}
        >
          <span
            className="w-2 h-2 rounded-full transition-colors duration-500"
            style={{ background: current.accent, boxShadow: `0 0 10px ${current.accent}` }}
          />
          <span className="text-sm font-semibold text-brand-ink">{current.label}</span>
          <span className="text-xs text-slate-500">· {current.sublabel}</span>
        </div>
      </div>

      {/* Flying messages */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: current.type === 'lock' ? 0 : 1 }}
      >
        {flyingMsgs.map((m, i) => (
          <FlyingMessage key={i} {...m} />
        ))}
      </div>

      {/* Particle dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`p-${i}`}
          className="absolute w-1 h-1 rounded-full bg-brand-blue pointer-events-none"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${15 + Math.random() * 70}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animation: `floatDot ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      <style>{`
        .phone-tilt-left { animation: phoneFloatA 6s ease-in-out infinite; }
        .phone-tilt-right { animation: phoneFloatB 6s ease-in-out infinite; }

        @keyframes phoneFloatA {
          0%, 100% { transform: translateY(-50%) rotateY(22deg) rotateZ(-4deg); }
          50%      { transform: translateY(-54%) rotateY(20deg) rotateZ(-3deg); }
        }
        @keyframes phoneFloatB {
          0%, 100% { transform: translateY(-50%) rotateY(-22deg) rotateZ(4deg); }
          50%      { transform: translateY(-46%) rotateY(-20deg) rotateZ(3deg); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }

        @keyframes msgFlyRight {
          0%   { left: 22%; opacity: 0; transform: translateY(-50%) scale(0.4); }
          15%  { opacity: 1; transform: translateY(-80%) scale(1); }
          50%  { transform: translateY(-95%) scale(1.05); }
          85%  { opacity: 1; transform: translateY(-80%) scale(1); }
          100% { left: 78%; opacity: 0; transform: translateY(-50%) scale(0.4); }
        }
        @keyframes msgFlyLeft {
          0%   { right: 22%; opacity: 0; transform: translateY(-50%) scale(0.4); }
          15%  { opacity: 1; transform: translateY(-20%) scale(1); }
          50%  { transform: translateY(-5%) scale(1.05); }
          85%  { opacity: 1; transform: translateY(-20%) scale(1); }
          100% { right: 78%; opacity: 0; transform: translateY(-50%) scale(0.4); }
        }

        @keyframes bubbleAppear {
          from { opacity: 0; transform: translateY(8px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%           { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes pwDotFill {
          from { background: #E2E8F0; transform: scale(0.7); }
          to   { background: #9333EA; transform: scale(1); }
        }
        @keyframes lockShake {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.08); }
        }
        @keyframes unlockSuccess {
          0%   { opacity: 0; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

// ── Phone frame wrapper ──────────────────────────────────────────────
function PhoneFrame({
  children,
  accent,
}: {
  children: React.ReactNode
  accent: string
}) {
  return (
    <div className="relative">
      {/* Soft shadow ground */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full opacity-60"
        style={{
          background: 'radial-gradient(ellipse, rgba(15,23,42,0.35) 0%, transparent 75%)',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="relative w-[180px] sm:w-[200px] rounded-[2rem] border border-slate-200 overflow-hidden bg-white"
        style={{
          aspectRatio: '9 / 19.5',
          boxShadow: `0 30px 60px -15px ${accent}55`,
        }}
      >
        {/* Screen content */}
        <div className="relative w-full h-full flex flex-col">{children}</div>
        {/* Subtle inner ring */}
        <div
          className="absolute inset-0 rounded-[2rem] pointer-events-none transition-all duration-500"
          style={{ boxShadow: `inset 0 0 0 2px ${accent}33` }}
        />
      </div>
    </div>
  )
}

// ── Animated chat UI ─────────────────────────────────────────────────
function ChatUI({
  chat,
  mirrored = false,
  secret = false,
}: {
  chat: typeof friendChat
  mirrored?: boolean
  secret?: boolean
}) {
  return (
    <>
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1 text-[8px] text-slate-500 font-semibold">
        <span>9:41</span>
        <span>•••</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100">
        <ArrowLeft size={12} className="text-slate-400" />
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ background: chat.avatarBg }}
        >
          {chat.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-brand-ink truncate">
              {chat.name}
            </span>
            {secret && <Lock size={8} className="text-emerald-500 shrink-0" strokeWidth={3} />}
          </div>
          <span className="text-[8px] text-slate-400 leading-none">{chat.status}</span>
        </div>
        <Phone size={11} className="text-slate-400 shrink-0" />
      </div>

      {/* Messages */}
      <div className="flex-1 px-2 py-2 flex flex-col gap-1.5 bg-slate-50/40 overflow-hidden">
        {chat.messages.map((m, i) => {
          const sentByUser = mirrored ? !m.fromMe : m.fromMe
          return (
            <div
              key={i}
              className={`flex ${sentByUser ? 'justify-end' : 'justify-start'}`}
              style={{
                opacity: 0,
                animation: `bubbleAppear 0.35s ease-out ${m.delay}ms forwards`,
              }}
            >
              <div
                className={`px-2.5 py-1.5 max-w-[80%] text-[9px] leading-snug ${
                  sentByUser
                    ? 'bg-brand-blue text-white rounded-2xl rounded-br-md'
                    : secret
                    ? 'bg-emerald-50 text-slate-800 rounded-2xl rounded-bl-md border border-emerald-100'
                    : 'bg-white text-slate-800 rounded-2xl rounded-bl-md border border-slate-200'
                }`}
              >
                {m.text}
              </div>
            </div>
          )
        })}

        {/* Typing indicator (last) */}
        <div
          className="flex justify-start"
          style={{
            opacity: 0,
            animation: `bubbleAppear 0.35s ease-out 3200ms forwards`,
          }}
        >
          <div className="px-2.5 py-1.5 bg-white rounded-2xl rounded-bl-md border border-slate-200 flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full bg-slate-400"
                style={{
                  animation: `typingDot 1.2s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-1.5 px-2 py-2 border-t border-slate-100 bg-white">
        <Smile size={11} className="text-slate-400 shrink-0" />
        <Paperclip size={11} className="text-slate-400 shrink-0" />
        <div className="flex-1 px-2 py-1 rounded-full bg-slate-100 text-[8px] text-slate-400">
          Type a message
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ background: chat.avatarBg }}
        >
          <Send size={9} className="text-white" />
        </div>
      </div>
    </>
  )
}

// ── Animated lock screen ─────────────────────────────────────────────
function LockUI() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white px-4 relative">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 pt-2 text-[8px] text-slate-500 font-semibold">
        <span>9:41</span>
        <span>•••</span>
      </div>

      {/* Header */}
      <div className="absolute top-6 left-0 right-0 flex items-center gap-2 px-3">
        <ArrowLeft size={12} className="text-slate-400" />
        <span className="text-[10px] font-bold text-brand-ink">Flip Space</span>
      </div>

      {/* Lock icon */}
      <div
        className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center mb-4 shadow-xl"
        style={{ animation: 'lockShake 1.4s ease-in-out infinite' }}
      >
        <Lock size={22} className="text-white" strokeWidth={2.5} />
      </div>

      <h3 className="text-[11px] font-bold text-brand-ink mb-1">Flip Space</h3>
      <p className="text-[8px] text-slate-500 mb-4 text-center">
        Enter password to access
        <br />
        another space
      </p>

      {/* Password dots */}
      <div className="flex gap-2 mb-4">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: '#E2E8F0',
              animation: `pwDotFill 0.3s ease-out ${300 + i * 400}ms forwards`,
            }}
          />
        ))}
      </div>

      {/* Unlock button */}
      <div
        className="px-5 py-1.5 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center gap-1"
        style={{
          opacity: 0,
          animation: 'unlockSuccess 0.4s ease-out 2200ms forwards',
        }}
      >
        <Check size={10} strokeWidth={3} />
        Unlocked
      </div>
    </div>
  )
}

// ── Flying message between phones ────────────────────────────────────
function FlyingMessage({
  text,
  delay,
  direction,
  color,
}: {
  text: string
  delay: number
  direction: string
  color: string
}) {
  const isRight = direction === 'right'
  return (
    <div
      className="absolute top-1/2 px-3 py-1.5 rounded-2xl text-xs font-medium text-white whitespace-nowrap"
      style={{
        background: color,
        boxShadow: `0 8px 20px -4px ${color}66, 0 0 20px ${color}44`,
        animation: `${isRight ? 'msgFlyRight' : 'msgFlyLeft'} 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >
      {text}
    </div>
  )
}
