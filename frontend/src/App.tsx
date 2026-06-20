/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  UtensilsCrossed, 
  Stethoscope, 
  ShoppingBag, 
  MessageCircle, 
  Check, 
  ChevronDown, 
  Share2, 
  Copy, 
  ExternalLink,
  Laptop,
  CheckCircle,
  Clock,
  Sparkles,
  Award,
  ShieldCheck,
  Instagram,
  Facebook
} from "lucide-react";
import Logo from "./components/Logo";

// Structure for the Bio Items
interface BioLink {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
  textColor: string;
  bgGlow: string;
  features: string[];
}

export default function App() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Core Bio Links representing the Hoffesoft ecosystem
  const bioLinks: BioLink[] = [
    {
      id: "controle",
      category: "MÓDULO WEB & COMÉRCIO",
      title: "Lojas e Varejo",
      subtitle: "Gestão inteligente de estoques, vendas e notas fiscais.",
      description: "Desenvolvido para autopeças, perfumarias, mercados, distribuidoras e prestadores de serviços. Rapidez fiscal absoluta.",
      url: "https://wa.me/5583988791595?text=Ol%C3%A1%20Hoffesoft!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20de%20Controle%20para%20Lojas%20e%20Varejo%20(HoffeControle).",
      icon: ShoppingBag,
      color: "from-blue-500/10 to-indigo-500/5",
      textColor: "text-blue-400",
      bgGlow: "shadow-blue-950/20 hover:shadow-blue-950/40 border-blue-900/20 hover:border-blue-500/30",
      features: [
        "Emissão fiscal veloz na nuvem (NFe, NFCe, MDFe)",
        "Estoque de alta precisão com aviso de volume mínimo",
        "Fluxo financeiro integrado com contas a pagar/receber",
        "Geração ágil de orçamentos e Ordens de Serviço (O.S.)"
      ]
    },
    {
      id: "food",
      category: "SISTEMA PARA FOOD SERVICE",
      title: "Bares e Restaurantes",
      subtitle: "Automatize comandas, mesas e delivery integrado.",
      description: "Perfeito para restaurantes, pizzarias, bares e lanchonetes. Tenha controle total da cozinha e do salão em tempo real.",
      url: "https://wa.me/5583988791595?text=Ol%C3%A1%20Hoffesoft!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20para%20Bares%20e%20Restaurantes%20(HoffeFood).",
      icon: UtensilsCrossed,
      color: "from-red-500/10 to-orange-500/5",
      textColor: "text-red-400",
      bgGlow: "shadow-red-950/20 hover:shadow-red-950/40 border-red-900/20 hover:border-red-500/30",
      features: [
        "Comanda eletrônica avançada para garçons",
        "KDS (Painel de Cozinha sincronizado em tempo real)",
        "Integração de pedidos nativa (WhatsApp, iFood e Web)",
        "Fechamento de mesa fracionado e divisão fácil de contas"
      ]
    },
    {
      id: "clinicas",
      category: "GESTÃO PARA SAÚDE",
      title: "Clínicas e Consultórios",
      subtitle: "Agenda inteligente, prontuário e lembretes automáticos.",
      description: "Ideal para médicos, cirurgiões-dentistas, psicólogos e centros de estética. Solução que otimiza sua jornada e o tempo do paciente.",
      url: "https://wa.me/5583988791595?text=Ol%C3%A1%20Hoffesoft!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20para%20Cl%C3%ADnicas%20e%20Consult%C3%B3rios%20(HoffeCl%C3%ADnicas).",
      icon: Stethoscope,
      color: "from-emerald-500/10 to-teal-500/5",
      textColor: "text-emerald-400",
      bgGlow: "shadow-emerald-950/20 hover:shadow-emerald-950/40 border-emerald-900/20 hover:border-emerald-500/30",
      features: [
        "Prontuário eletrônico certificado (CFM e LGPD)",
        "Lembretes e confirmações automáticos via WhatsApp",
        "Controle ágil de convênios, repasses e faturamento",
        "Agenda compartilhada de múltiplos profissionais"
      ]
    },
    {
      id: "outros",
      category: "OUTROS SEGMENTOS",
      title: "Fale no WhatsApp",
      subtitle: "Controle Pet Shop, Salão de Estética e Agronegócio.",
      description: "Temos módulos perfeitamente adaptados para as particularidades do seu dia a dia profissional com suporte dedicado.",
      url: "https://wa.me/5583988791595?text=Ol%C3%A1%20Hoffesoft!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Hoffesoft%20para%20meu%20dia%20a%20dia.",
      icon: MessageCircle,
      color: "from-purple-500/11 to-violet-500/5",
      textColor: "text-emerald-400",
      bgGlow: "shadow-slate-950/20 hover:shadow-slate-950/40 border-slate-900 hover:border-emerald-500/40",
      features: [
        "Suporte humanizado e ágil sediado em Campina Grande/PB",
        "HoffePet: Banho e tosa integrado e ficha veterinária",
        "HoffeAgenda: Sistema de comissões e agendamento 24h",
        "HoffeAgro: Livro de Caixa e emissão de notas de produtores"
      ]
    }
  ];

  // Handle Share functionality for mobile web browsers
  const handleShare = async () => {
    const shareData = {
      title: "Hoffesoft - Ecossistema Inteligente",
      text: "Explore as soluções inteligentes de gestão comercial da Hoffesoft.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch (err) {
        console.log("Failed to copy link:", err);
      }
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#020710] text-slate-100 flex flex-col items-center justify-between selection:bg-blue-600/30 selection:text-blue-200 antialiased overflow-x-hidden relative py-10 px-4 sm:px-6">
      
      {/* Delicate Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b04_1px,transparent_1px),linear-gradient(to_bottom,#1e293b04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Radiant Glow Lights behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[450px] bg-gradient-radial from-blue-900/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[10%] w-72 h-72 bg-blue-600/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-cyan-600/[0.01] rounded-full blur-3xl pointer-events-none" />

      {/* Floating Action Header: Share Button */}
      <div className="w-full max-w-md flex justify-end mb-4 z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/70 border border-slate-800/80 text-slate-300 hover:text-white text-xs font-medium cursor-pointer backdrop-blur-md transition-colors"
          title="Compartilhar Link da Bio"
          id="btn-compartilhar-bio"
        >
          {copied ? (
            <>
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Link Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="h-3.5 w-3.5" />
              <span>Compartilhar</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Main Column Container */}
      <div className="w-full max-w-md flex flex-col items-center flex-1 z-10">
        
        {/* Profile/Header Section */}
        <div className="text-center flex flex-col items-center mb-8">
          
          {/* Circular Glow Logo Wrapper */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative p-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-xl shadow-blue-950/50 mb-4 group cursor-pointer"
          >
            {/* Soft breathing halo behind */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md group-hover:bg-blue-500/35 transition-all duration-300 animate-pulse" />
            
            {/* The Actual Logo Icon Center */}
            <div className="relative w-20 sm:w-22 aspect-square rounded-full bg-[#030917] flex items-center justify-center overflow-hidden border border-white/5 active:scale-[0.97] transition-all">
              <img
                src="/NomeSiteBranco.png"
                alt="Logo Hoffesoft"
                className="w-14 h-14 object-contain transition-transform duration-500 group-hover:rotate-6"
              />
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-1.5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Hoffesoft
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-1.5 text-xs sm:text-sm font-medium tracking-wide text-slate-400 flex items-center justify-center gap-1"
          >
            <span>Ecossistema Inteligente para Empresas</span>
            <Sparkles className="h-3 w-3 text-sky-400 fill-current animate-pulse ml-0.5" />
          </motion.p>
        </div>

        {/* Micro Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-6 flex-wrap justify-center max-w-xs"
        >
          <div className="flex items-center gap-1 bg-blue-950/25 border border-blue-900/30 px-2.5 py-1 rounded-full text-[10px] text-blue-300 font-medium font-mono">
            <Award className="h-3 w-3 text-blue-400" />
            <span>SUPORTE NOTA 4,8 ★</span>
          </div>
          <div className="flex items-center gap-1 bg-emerald-950/20 border border-emerald-900/30 px-2.5 py-1 rounded-full text-[10px] text-emerald-400 font-medium font-mono">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>100% SEFAZ</span>
          </div>
        </motion.div>

        {/* Links Bio Container */}
        <div className="w-full flex flex-col gap-4 mb-8">
          {bioLinks.map((link, index) => {
            const LinkIcon = link.icon;
            const isExpanded = expandedId === link.id;

            return (
              <motion.div
                key={link.id}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                layout="position"
                className={`bg-slate-950/60 rounded-2xl border backdrop-blur-md transition-all shadow-lg flex flex-col overflow-hidden group/card ${link.bgGlow}`}
              >
                {/* Main Card trigger Area */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center gap-4 p-4 text-left select-none outline-none focus-visible:ring-1 focus-visible:ring-blue-500/50"
                  id={`link-card-${link.id}`}
                >
                  {/* Left Column: Segment Icon with Glow */}
                  <div className={`p-3.5 rounded-xl bg-gradient-to-tr ${link.color} text-slate-200 border border-white/[0.03] transition-all duration-300 shadow-md flex items-center justify-center shrink-0`}>
                    <LinkIcon className="h-5w-5" />
                  </div>

                  {/* Center Column: Text */}
                  <div className="flex-1 min-w-0 pr-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 block">
                      {link.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-0.5 tracking-wide flex items-center gap-1 group-hover/card:text-blue-300 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5 truncate leading-snug">
                      {link.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Interaction Action Panel */}
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    {/* Expand Detail trigger button */}
                    <button
                      onClick={(e) => toggleExpand(link.id, e)}
                      className="p-1 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer block"
                      aria-label="Ver mais recursos"
                      title="Ver mais recursos"
                    >
                      <ChevronDown 
                        className={`h-4.5 w-4.5 transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-400" : "text-slate-500"}`} 
                      />
                    </button>
                    
                    {/* Direct link external arrow */}
                    <ExternalLink className="h-3 w-3 text-slate-600 opacity-60 group-hover/card:opacity-100 group-hover/card:text-blue-400 transition-all group-hover/card:translate-x-0.5" />
                  </div>
                </a>

                {/* Expanded Details Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-[#030917]/80 border-t border-slate-900/40"
                    >
                      <div className="p-4 space-y-4">
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {link.description}
                        </p>

                        {/* Bullets List */}
                        <div className="space-y-2">
                          {link.features.map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-start gap-2 text-[11px] text-slate-300 font-light">
                              <span className="mt-0.5 p-0.5 rounded bg-emerald-500/10 text-emerald-400 shrink-0">
                                <Check className="h-2.5 w-2.5 stroke-[4]" />
                              </span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Internal CTA directly within drawer expansion */}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-650 hover:bg-blue-600 active:scale-[0.98] transition-all text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-blue-950 cursor-pointer"
                        >
                          <span>Solicitar Demonstração</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Technical Specifications / Localized Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-slate-950/30 p-4 rounded-2xl border border-slate-900/50 flex flex-col gap-3 text-left mb-6"
        >
          <div className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 text-emerald-450 shrink-0 animate-pulse" />
            <div>
              <p className="text-xs font-bold text-slate-300 mb-0.5">Suporte de Engenharia Integrado</p>
              <p className="text-[11px] text-slate-500 font-light">Sistemas em nuvem monitorados ativos 24/7 de alta confiabilidade.</p>
            </div>
          </div>
          
          <div className="h-[1px] bg-slate-900/80 w-full" />
          
          <div className="flex items-start gap-2">
            <div className="text-[10px] bg-blue-950/30 border border-blue-900/30 px-1.5 py-0.5 rounded text-blue-400 font-bold shrink-0 mt-0.5 font-sans">
              ATD
            </div>
            <p className="text-[11px] text-slate-400 leading-normal font-light">
              Fale com um técnico qualificado de Campina Grande/PB de Segunda a Sexta: <strong className="font-semibold text-slate-200">08h às 18h</strong>, e Sábados: <strong className="font-semibold text-slate-200 text-slate-200">08h às 12h</strong>.
            </p>
          </div>
        </motion.div>

        {/* Social Network Channels */}
        <div className="flex gap-4 items-center justify-center text-slate-550 mb-4 select-none">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:text-white transition-all cursor-pointer shadow-md"
            aria-label="Acesse nosso Facebook"
          >
            <Facebook className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:text-white transition-all cursor-pointer shadow-md"
            aria-label="Acesse nosso Instagram"
          >
            <Instagram className="h-4.5 w-4.5" />
          </a>
        </div>

      </div>

      {/* Modern, clean Minimalist Footer */}
      <div className="w-full max-w-sm text-center select-none z-10 pt-4 border-t border-slate-950/80">
        <a
          href="https://hoffesoft.com.br"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 font-semibold transition-colors py-2 px-4 rounded-xl bg-slate-950/20 hover:bg-slate-950/50 border border-transparent hover:border-slate-900/20"
          id="link-site-oficial"
        >
          <span>hoffesoft.com.br</span>
          <ExternalLink className="h-3 w-3 opacity-60" />
        </a>
        <p className="text-[10px] text-slate-600 mt-2 font-light">
          © 2026 Hoffesoft Sistemas. CNPJ: 66.940.657/0001-47.
        </p>
      </div>

    </div>
  );
}
