import { appName } from '../../utils/constants'

function Authlayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#10121f] px-4 py-8 sm:px-6 lg:px-10">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.16) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-[2rem] border border-violet-400/70 bg-[linear-gradient(180deg,rgba(10,15,35,0.95),rgba(8,12,28,0.98))] p-2 shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_0_40px_rgba(99,102,241,0.18)]">
          <div className="grid min-h-[720px] overflow-hidden rounded-[1.6rem] bg-[#090d1f] lg:grid-cols-[1.08fr_0.92fr] max-[440px]:min-h-[unset]">
            <section className="relative hidden overflow-hidden border-r border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),linear-gradient(180deg,#0d1328_0%,#0b1122_100%)] px-10 py-10 text-white lg:flex lg:flex-col">
              <div className="absolute inset-y-0 right-0 w-px bg-white/6" />
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/90 text-sm font-black text-slate-950">
                  P
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">{appName}</p>
                </div>
              </div>

              <div className="max-w-md">
                <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  System v4.0 stable
                </p>
                <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight">
                  The Command
                  <br />
                  Horizon for
                  <br />
                  <span className="bg-[linear-gradient(90deg,#f8fafc_0%,#7dd3fc_55%,#67e8f9_100%)] bg-clip-text text-transparent">
                    Modern SaaS
                  </span>
                </h1>
                <p className="mt-8 text-sm leading-7 text-slate-300">
                  Execute decisions with surgical precision. PulseStack delivers low-latency telemetry, secure session handling, and streamlined workspace control for modern SaaS teams.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                {[
                  ['Neural telemetry', 'Real-time data flow with zero cognitive friction.'],
                  ['Encrypted core', 'Military-grade cipher protocols for every session.'],
                  ['Predictive logic', 'AI-driven forecasting integrated into your cockpit.'],
                ].map(([heading, copy]) => (
                  <div key={heading} className="flex gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
                    <div>
                      <p className="text-sm font-semibold">{heading}</p>
                      <p className="mt-1 text-xs text-slate-400">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Secure ecosystem partners</p>
                <div className="mt-4 flex gap-4">
                  {['IO', 'NX', 'XR'].map((item) => (
                    <div key={item} className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-center text-xs leading-8 text-slate-400">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="flex items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_26%),linear-gradient(180deg,#090d1f_0%,#0a1020_100%)] px-4 py-8 sm:px-8 lg:px-10">
              <div className="w-full max-w-md">
                <div className="mb-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">{appName}</p>
                  <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">{title}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{subtitle}</p>
                </div>

                <div className="rounded-[1.8rem] border border-white/5 bg-[#131a31]/95 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.45)] sm:p-6">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authlayout
