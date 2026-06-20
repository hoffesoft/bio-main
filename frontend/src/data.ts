/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SystemItem, NavItem, MetricItem } from "./types";

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Sistemas", href: "#sistemas" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Missão", href: "#missao" },
  { label: "Contato", href: "#contato" },
];

export const systems: SystemItem[] = [
  {
    id: "controle",
    name: "Controle",
    subtitle: "Gestão Varejo & Serviços",
    description: "Para varejo, autopeças, mercados e prestadores de serviço. Gerencie atendimentos, estoque e emita notas fiscais em segundos, de qualquer dispositivo.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    icon: "ShoppingBag",
    accentColor: "#3b82f6",
    gradient: "from-blue-650 to-indigo-900",
    details: [
      "Emissão fiscal ultrarrápida (NFe, NFCe, MDFe)",
      "Gestão de estoque inteligente com notificações de níveis baixos",
      "Fluxo de caixa em tempo real integrado a contas a pagar/receber",
      "Orçamentos profissionais e ordens de serviço (OS) automatizadas"
    ]
  },
  {
    id: "food",
    name: "Food",
    subtitle: "Restaurantes & Bares",
    description: "Para restaurantes, bares, lanchonetes e delivery. Automatize comandas, o fluxo detalhado da cozinha e o controle de pedidos em tempo real.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600",
    icon: "UtensilsCrossed",
    accentColor: "#ef4444",
    gradient: "from-red-650 to-orange-900",
    details: [
      "Comanda eletrônica intuitiva no tablet ou celular do garçom",
      "KDS (Painel da Cozinha) integrado para agilizar o preparo",
      "Integração direta com iFood, WhatsApp e canais de delivery",
      "Gestão de mesas, comandas individuais e divisão de contas"
    ]
  },
  {
    id: "clinicas",
    name: "Clínicas",
    subtitle: "Saúde & Consultórios",
    description: "Para clínicas médicas, odontológicas e consultórios. Agenda dinâmica, prontuário eletrônico certificado e gestão financeira unificados.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    icon: "Stethoscope",
    accentColor: "#10b981",
    gradient: "from-emerald-650 to-teal-900",
    details: [
      "Prontuário eletrônico em total conformidade com normas CFM e LGPD",
      "Lembretes e confirmações recorrentes de consultas via WhatsApp",
      "Controle ágil de convênios, repasses e faturamento médico",
      "Histórico completo de receitas, atestados e evoluções clínicas"
    ]
  },
  {
    id: "pet",
    name: "Pet",
    subtitle: "Pet Shops & Veterinárias",
    description: "Para pet shops, clínicas veterinárias e banho e tosa. Acompanhe atendimentos, lembretes de vacinas e serviços com facilidade.",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=600",
    icon: "PawPrint",
    accentColor: "#f59e0b",
    gradient: "from-amber-650 to-yellow-900",
    details: [
      "Ficha clínica veterinária com histórico de fotos e exames",
      "Agendamento inteligente do banho e tosa com painel de status",
      "Envio automatizado de notificações de vacinas e vermífugos aos tutores",
      "Controle de pacote de serviços e vendas recorrentes"
    ]
  },
  {
    id: "agenda",
    name: "Agenda",
    subtitle: "Beleza, Spas & Clínicas de Estética",
    description: "Para salões de beleza, barbearias, spas e estética. Agendamento online, comandas virtuais completas e controle de profissionais terceirizados.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
    icon: "CalendarRange",
    accentColor: "#8b5cf6",
    gradient: "from-purple-650 to-pink-900",
    details: [
      "Link exclusivo para os clientes agendarem online 24h por dia",
      "Interface visual de grade de profissionais com status de ocupado",
      "Cálculo automatizado de comissões por colaborador em tempo real",
      "Check-out simplificado com integração a pix e cartões"
    ]
  },
  {
    id: "agro",
    name: "Agro",
    subtitle: "Produtores Rurais & Agronegócio",
    description: "Para produtores rurais individuais, fazendas e cooperativas. Livro Caixa Digital do Produtor Rural, controle de insumos e faturamento ágil.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    icon: "Sprout",
    accentColor: "#15803d",
    gradient: "from-green-650 to-emerald-950",
    details: [
      "Emissão descomplicada de Nota Fiscal de Produtor Rural (NFe)",
      "Geração do Livro Caixa Digital do Produtor Rural (LCDPR) obrigatório",
      "Controle de defensivos, sementes, safras, estoque e maquinários",
      "Análise de lucratividade estimada por hectare ou área de plantio"
    ]
  },
];

export const metrics: MetricItem[] = [
  {
    value: "+10k",
    label: "Negócios Atendidos",
    description: "Empresas que confiam na nossa tecnologia diariamente"
  },
  {
    value: "99.9%",
    label: "Disponibilidade (SLA)",
    description: "Sistemas em nuvem de alta confiabilidade ativos 24/7"
  },
  {
    value: "4.8 ★",
    label: "Satisfação Média",
    description: "Eleita uma das melhores soluções nacionais em suporte"
  },
];
