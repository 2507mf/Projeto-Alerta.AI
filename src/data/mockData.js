// ─── Chamados Abertos ────────────────────────────────────────────────────────
export const chamadosAbertos = [
  {
    id: '00001',
    nome: 'Pedro Albuquerque',
    localizacao: 'Casa Caíada, 702',
    data: '14 Abr 2026, 12h36',
    tipo: 'Alagamento',
    status: 'Leve',
  },
  {
    id: '00002',
    nome: 'Camila Campos',
    localizacao: 'Rio Doce, 123',
    data: '14 Abr 2026, 12h31',
    tipo: 'Ventania',
    status: 'Moderado',
  },
  {
    id: '00003',
    nome: 'Maria Silva',
    localizacao: 'Bairro Dois Unidos, 354',
    data: '14 Abr 2026, 12h13',
    tipo: 'Deslizamento',
    status: 'Crítico',
  },
  {
    id: '00004',
    nome: 'Joana Freire',
    localizacao: 'Curado, 1725',
    data: '14 Abr 2026, 11h59',
    tipo: 'Deslizamento',
    status: 'Leve',
  },
  {
    id: '00005',
    nome: 'Alana Pontes',
    localizacao: 'COHAB, 21',
    data: '14 Abr 2026, 11h41',
    tipo: 'Fortes Ventos',
    status: 'Moderado',
  },
  {
    id: '00006',
    nome: 'Rodrigo Nunes',
    localizacao: 'Bairro da Guabiraba, 101',
    data: '14 Abr 2026, 11h22',
    tipo: 'Alagamento',
    status: 'Leve',
  },
]

// ─── Gráfico de Barras — Quantidade de Chamados (JAN–JUL) ────────────────────
export const dadosChamadosMensais = [
  { mes: 'JAN', quantidade: 148 },
  { mes: 'FEV', quantidade: 102 },
  { mes: 'MAR', quantidade: 121 },
  { mes: 'ABR', quantidade: 134 },
  { mes: 'MAI', quantidade: 178 },
  { mes: 'JUN', quantidade: 195 },
  { mes: 'JUL', quantidade: 214 },
]

// ─── Gráfico de Rosca — Prioridade ───────────────────────────────────────────
export const dadosPrioridade = [
  { name: 'Crítico',  value: 25, color: '#FF4A4A' },
  { name: 'Moderado', value: 35, color: '#FFAD47' },
  { name: 'Leve',     value: 40, color: '#3BA94A' },
]

// ─── Próximas Previsões ───────────────────────────────────────────────────────
export const proximasPrevisoes = [
  {
    id: 1,
    titulo: 'Previsão de chuva forte',
    horario: '09:20 AM',
    urgencia: 'Amanhã',
    tipo: 'chuva',
  },
  {
    id: 2,
    titulo: 'Possibilidade de alagamento',
    horario: '03:00 PM',
    urgencia: 'Amanhã',
    tipo: 'alagamento',
  },
]

// ─── Atividades Recentes ──────────────────────────────────────────────────────
export const atividadesRecentes = [
  {
    id: 3,
    descricao: 'Comunicação em massa',
    data: '10 Jan, 11:00AM',
    tipo: 'comunicacao',
    cor: '#3b82f6',
  },
  {
    id: 5,
    descricao: 'Envio de socorro a Dois Unidos',
    data: '04 Jan, 13:00PM',
    tipo: 'socorro',
    cor: '#8b5cf6',
  },
  {
    id: 2,
    descricao: 'Análise de Riscos Mapeados',
    data: '04 Jan, 10:20AM',
    tipo: 'analise',
    cor: '#22c55e',
  },
  {
    id: 1,
    descricao: 'Envio de socorro à Várzea',
    data: '04 Jan, 09:20AM',
    tipo: 'socorro',
    cor: '#8b5cf6',
  },
  {
    id: 4,
    descricao: 'Envio de socorro ao Ibura',
    data: '04 Jan, 09:00AM',
    tipo: 'socorro',
    cor: '#8b5cf6',
  },
]

// ─── Marcadores do Mapa (Recife) ──────────────────────────────────────────────
export const marcadoresMapa = [
  {
    id: 1,
    lat: -8.013,
    lng: -34.946,
    titulo: 'Sensores de Terreno',
    descricao: 'Monitoramento de estabilidade do solo e detecção de movimentos de terreno',
    tipo: 'sensor',
  },
  {
    id: 2,
    lat: -8.033,
    lng: -34.921,
    titulo: 'Níveis de Rio',
    descricao: 'Monitoramento de nível, vazão e estabilidade dos rios em tempo real',
    tipo: 'rio',
  },
  {
    id: 3,
    lat: -8.055,
    lng: -34.905,
    titulo: 'Relatos da População',
    descricao: 'Relatos enviados pela população sobre incidentes e situações de risco',
    tipo: 'relato',
  },
  {
    id: 4,
    lat: -8.01,
    lng: -34.888,
    titulo: 'Satélite INMET',
    descricao: 'Análise de condições atmosféricas e monitoramento de cobertura de nuvens',
    tipo: 'satelite',
  },
  {
    id: 5,
    lat: -8.025,
    lng: -34.875,
    titulo: 'Estações Meteorológicas',
    descricao: 'Medição de temperatura, precipitação e condições climáticas locais',
    tipo: 'meteorologia',
  },
  {
    id: 6,
    lat: -8.048,
    lng: -34.882,
    titulo: 'Satélite e Radar',
    descricao: 'Imagens de satélite e radar para monitoramento de precipitação e tempestades',
    tipo: 'radar',
  },
]

// ─── Clusters de ocorrências no mapa ─────────────────────────────────────────
export const ocorrenciasMapa = [
  { lat: -8.044, lng: -34.898 },
  { lat: -8.047, lng: -34.895 },
  { lat: -8.050, lng: -34.901 },
  { lat: -8.053, lng: -34.896 },
  { lat: -8.046, lng: -34.907 },
  { lat: -8.042, lng: -34.903 },
  { lat: -8.056, lng: -34.893 },
  { lat: -8.049, lng: -34.888 },
  { lat: -8.058, lng: -34.900 },
  { lat: -8.051, lng: -34.910 },
  { lat: -8.044, lng: -34.915 },
  { lat: -8.060, lng: -34.905 },
]

// ─── Usuário logado ───────────────────────────────────────────────────────────
export const usuario = {
  nome: 'Mirella',
  cargo: 'Operadora Defesa Civil',
  avatar: null,
}
