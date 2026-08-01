import { TrendingUp, Globe, QrCode, Zap, ShieldCheck, LayoutDashboard } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "Analytics Avançado",
        description: "Descubra de onde vêm seus cliques, quais os dispositivos usados e a localização geográfica da sua audiência em tempo real."
    },
    {
        icon: Globe,
        title: "Subdomínio Exclusivo",
        description: "Garanta autoridade imediata. Crie seu workspace e gere links com a sua marca diretamente no nosso domínio (ex: suaempresa.tramita.me)"
    },
    {
        icon: QrCode,
        title: "QR Codes Dinâmicos",
        description: "Gere QR Codes instantâneos e limpos (fáceis de ler) baseados no seu link encurtado. Perfeito para materiais impressos e eventos."
    },
    {
        icon: Zap,
        title: "Redirecionamento Ultrarrápido",
        description: "Links que abrem instantaneamente. Nossa arquitetura de cache em memória (Redis) garante redirecionamentos abaixo de 5 milissegundos."
    },
    {
        icon: ShieldCheck,
        title: "Proteção contra Abusos",
        description: "Segurança nativa contra robôs e ataques. Sistemas inteligentes de limite de requisições garantem que seus links nunca saiam do ar."
    },
    {
        icon: LayoutDashboard,
        title: "Gestão Simplificada",
        description: "Acompanhe e organize todo o seu ecossistema de URLs através de um painel de controle desenhado para agilidade e produtividade."
    }
];

const FeaturesSection = () => {
    return (
        <section className="bg-[#fffdf8] py-24 px-6 border-b border-slate-200">
            <div className="max-w-[1200px] mx-auto w-full">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        Tudo que você precisa para crescer
                    </h2>
                    <p className="text-lg text-slate-600 font-medium">
                        Recursos avançados disponíveis desde o plano gratuito.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(13,148,136,0.08)]"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#e6fbf4] text-[#0d9488] flex items-center justify-center mb-5">
                                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
