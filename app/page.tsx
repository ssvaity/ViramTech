import { TechMarquee } from "@/components/TechMarquee";

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-[80px] md:pt-[100px]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-section-padding-mobile md:py-section-padding-desktop bg-grid-pattern">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none bg-gradient-to-bl from-primary-fixed to-transparent rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-20 pointer-events-none bg-gradient-to-tr from-secondary-fixed to-transparent rounded-tr-full blur-3xl"></div>
        <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 md:gap-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-metadata-label text-metadata-label text-primary uppercase">
                Next-Gen AI Platform
              </span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl">
              Transforming enterprise operations{" "}
              <span className="font-accent-italic text-accent-italic text-primary italic">
                with
              </span>{" "}
              intelligent AI
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Deploy scalable, secure artificial intelligence solutions that
              seamlessly integrate with your existing infrastructure. We build
              the future of automated enterprise workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-on-primary rounded-full font-body-lg text-body-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                Explore Solutions{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-body-lg text-body-lg font-semibold hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300 bg-surface/50 backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-on-surface-variant">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    business
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    analytics
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-tertiary">
                    security
                  </span>
                </div>
              </div>
              <p>
                <span className="font-bold text-on-surface">500+</span>{" "}
                Enterprise Deployments
              </p>
            </div>
          </div>
          {/* Hero Visual (Orb) */}
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto animate-float flex items-center justify-center">
            {/* Pulsing aura glow behind the orb */}
            <div className="pointer-events-none absolute inset-[14%] z-0 rounded-full bg-gradient-to-tr from-primary/50 via-secondary/40 to-tertiary/40 blur-3xl animate-pulse-glow"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="ViramTech AI"
              className="img-fade animate-orb-breathe w-full h-full object-contain drop-shadow-2xl z-10 relative"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_fkwA53vWm2m0LBM5KUhP_OQhCcn4dt4hfgC6TQ7dWGzqYX4DuP6VQ7sqdjvH-ituhezDR2UFYqIe0uSIXrHiM4upoydFBuW-x5V8wMA5TrnAdJJ_SvDYEXjh1zm5QRWhgX5wJp0zoXzoT0zxtoU5gbFZEcC3yJjs0U5KbWwtWo-4SF-UBD-NzW88Vkra5tZGxhKVlqcBrt_PfHDUjH_VGjuCwWLV9B4v5z7uFzgcCMceLQHPAINEBZ2PoM0yf2ddG7DNkaqvdAeU"
            />
            {/* Orbiting rings behind orb */}
            <div className="pointer-events-none absolute inset-0 z-0 animate-spin-slow">
              <div className="absolute inset-0 rounded-full border border-primary/25 scale-110 -rotate-12"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 animate-spin-reverse">
              <div className="absolute inset-0 rounded-full border border-secondary/20 scale-125 rotate-45"></div>
            </div>
            {/* Glass floating card */}
            <div className="absolute bottom-10 -left-10 bg-surface/80 backdrop-blur-xl border border-outline-variant/30 p-4 rounded-xl shadow-[0px_10px_30px_rgba(20,40,78,0.08)] flex items-center gap-4 z-20 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <div>
                <p className="font-metadata-label text-metadata-label text-on-surface-variant uppercase">
                  Processing Speed
                </p>
                <p className="text-headline-md text-on-surface">99.9% Faster</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo loop (kept) */}
      <TechMarquee />

      {/* Features Bento Grid */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest relative z-10">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Architected for{" "}
              <span className="font-accent-italic text-accent-italic text-primary italic">
                Scale
              </span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our unified platform brings together disparate data sources into a
              single, intelligent operational layer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 bg-surface border border-outline-variant/30 rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0px_10px_30px_rgba(20,40,78,0.08)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Centralized Neural Architecture
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                  Deploy proprietary LLMs securely within your VPC. Maintain
                  complete control over your training data while leveraging
                  state-of-the-art reasoning capabilities.
                </p>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-1">
                    <span className="font-metadata-label text-metadata-label text-on-surface-variant">
                      Data Sovereignty
                    </span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        lock
                      </span>{" "}
                      100% Secure
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-1">
                    <span className="font-metadata-label text-metadata-label text-on-surface-variant">
                      Latency
                    </span>
                    <span className="font-bold text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        timer
                      </span>{" "}
                      &lt; 50ms
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0px_10px_30px_rgba(20,40,78,0.08)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">api</span>
                </div>
                <h4 className="font-bold text-lg text-on-surface mb-2">
                  Seamless Integration
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Pre-built connectors for major ERPs and CRMs.
                </p>
              </div>
              <div className="h-24 bg-surface-container-lowest rounded-lg border border-outline-variant/20 mt-4 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Abstract connecting nodes representing seamless enterprise integration"
                  className="img-fade w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWAnBOwp10hc9t1DJW_pjfAad4aL78fkNPlBPxLAeJvDHIyJ61uHK2YXYe88Sjzg5GI5vHjWTjHSXJoRRrXHGb5hf6-L3Uwn5z-SMx3GZBablrewpQMur-EM5y6FYR2F3Y428hvlvuzglJFSM46n0r_QfZrWNn1FCkviOKEZQxHFkibFylcHHfUjjJRd9HABH5dfGd5q57nTahHig_Z7dikYsFrCRXuZsMXtdh_D5AUNV1iwbkcKS5wyFyx8S6bQqBuGBqG9h2dUD"
                />
              </div>
            </div>
            {/* Small Feature 2 */}
            <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0px_10px_30px_rgba(20,40,78,0.08)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <h4 className="font-bold text-lg text-on-surface mb-2">
                  Predictive Analytics
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Anticipate market shifts with real-time modeling.
                </p>
              </div>
              <div className="h-24 mt-4 relative">
                {/* Abstract chart representation */}
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end gap-2 px-2">
                  <div className="w-1/4 bg-primary/20 h-1/3 rounded-t-sm"></div>
                  <div className="w-1/4 bg-primary/40 h-2/3 rounded-t-sm"></div>
                  <div className="w-1/4 bg-primary/60 h-1/2 rounded-t-sm"></div>
                  <div className="w-1/4 bg-primary h-full rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Intelligence, Localized Impact */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low relative z-10">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Global Intelligence,{" "}
              <span className="font-accent-italic text-accent-italic text-primary italic">
                Localized
              </span>{" "}
              Impact
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Empowering organizations across continents with localized AI
              models that understand regional nuances while maintaining global
              standards.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-surface border border-outline-variant/30 p-8 rounded-2xl shadow-[0px_10px_30px_rgba(20,40,78,0.04)] hover:shadow-[0px_10px_30px_rgba(20,40,78,0.08)] transition-all duration-300">
                <p className="font-metadata-label text-metadata-label text-primary uppercase mb-2">
                  Scale
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  50+ Global Enterprises
                </h3>
                <p className="text-on-surface-variant mt-2">
                  Trusted by Fortune 500 companies across 12 industries.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant/30 p-8 rounded-2xl shadow-[0px_10px_30px_rgba(20,40,78,0.04)] hover:shadow-[0px_10px_30px_rgba(20,40,78,0.08)] transition-all duration-300">
                <p className="font-metadata-label text-metadata-label text-secondary uppercase mb-2">
                  Reliability
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  24/7 Neural Monitoring
                </h3>
                <p className="text-on-surface-variant mt-2">
                  Continuous performance optimization and threat detection.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant/30 p-8 rounded-2xl shadow-[0px_10px_30px_rgba(20,40,78,0.04)] hover:shadow-[0px_10px_30px_rgba(20,40,78,0.08)] transition-all duration-300">
                <p className="font-metadata-label text-metadata-label text-tertiary uppercase mb-2">
                  Precision
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  99.9% Model Accuracy
                </h3>
                <p className="text-on-surface-variant mt-2">
                  State-of-the-art benchmarks in enterprise reasoning tasks.
                </p>
              </div>
            </div>
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full h-full border border-primary/20 rounded-full absolute animate-float"></div>
                <div
                  className="w-3/4 h-3/4 border border-secondary/20 rounded-full absolute animate-float"
                  style={{ animationDelay: "-2s" }}
                ></div>
                <div
                  className="w-1/2 h-1/2 border border-tertiary/20 rounded-full absolute animate-float"
                  style={{ animationDelay: "-4s" }}
                ></div>
                <div className="grid grid-cols-4 gap-4 opacity-40">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    language
                  </span>
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    hub
                  </span>
                  <span className="material-symbols-outlined text-tertiary text-4xl">
                    public
                  </span>
                  <span className="material-symbols-outlined text-primary text-4xl">
                    cloud_sync
                  </span>
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    router
                  </span>
                  <span className="material-symbols-outlined text-tertiary text-4xl">
                    satellite_alt
                  </span>
                  <span className="material-symbols-outlined text-primary text-4xl">
                    lan
                  </span>
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    cell_tower
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
