# QR TV Indoor - Sistema de Gestão de TVs Corporativas

## Descrição do Projeto

O **QR TV Indoor** é um módulo complementar da plataforma QRMidia, desenvolvido especificamente para gerenciar TVs corporativas em ambientes internos como supermercados, lojas, escritórios e outros estabelecimentos comerciais.

## Funcionalidades Principais

### 📺 Dashboard / Visão Geral
- Monitoramento em tempo real de todas as TVs cadastradas
- Estatísticas de playlists ativas e artes agendadas
- Ações rápidas para cadastro de TVs, criação de playlists e visualização de relatórios
- Status detalhado de cada TV (online/offline)

### 🖥️ Gerenciamento de TVs
- Cadastro e edição de TVs com informações detalhadas
- Configuração de localização, resolução e orientação
- Teste de conectividade e configurações de rede
- Histórico de atividades por TV

### 🎨 Biblioteca de Artes
- Importação de artes do sistema QR Ofertas
- Organização por categorias (Promoções, Ofertas, Institucional, etc.)
- Sistema de busca e filtros avançados
- Visualização em grade e lista
- Gerenciamento de favoritos

### 📋 Criação de Playlists
- Interface drag-and-drop para organização de artes
- Configurações de duração e transições
- Preview em tempo real da playlist
- Opções de repetição e ordem aleatória

### 📅 Agendamento de Publicações
- Calendário visual para agendamento
- Configuração de horários e repetições
- Seleção de TVs específicas ou grupos
- Notificações automáticas

### 📊 Monitoramento e Relatórios
- Gráficos de tempo de exibição
- Estatísticas de artes mais exibidas
- Performance individual por TV
- Histórico de publicações
- Sistema de alertas e notificações

## Estrutura de Arquivos

```
qr_tv_indoor/
├── css/
│   └── style.css           # Estilos principais do sistema
├── js/                     # Diretório para scripts JavaScript
├── images/                 # Diretório para imagens e assets
├── dashboard.html          # Página principal - Dashboard
├── tvs.html               # Gerenciamento de TVs
├── biblioteca.html        # Biblioteca de artes
├── playlists.html         # Criação de playlists
├── agendamento.html       # Agendamento de publicações
├── relatorios.html        # Monitoramento e relatórios
└── README.md              # Este arquivo
```

## Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Interatividade e funcionalidades dinâmicas
- **Chart.js** - Gráficos e visualizações de dados
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Inter)

## Design e UX

### Paleta de Cores
- **Primária**: #6366f1 (Azul)
- **Secundária**: #f8fafc (Cinza claro)
- **Accent**: #10b981 (Verde)
- **Warning**: #f59e0b (Amarelo)
- **Danger**: #ef4444 (Vermelho)

### Características do Design
- Interface limpa e moderna
- Layout responsivo para desktop e mobile
- Navegação intuitiva com sidebar
- Consistência visual com a plataforma QRMidia
- Feedback visual para ações do usuário

## Funcionalidades Implementadas

### ✅ Completas
- [x] Layout responsivo em todas as telas
- [x] Navegação entre páginas
- [x] Interface de dashboard com métricas
- [x] Formulários de cadastro e edição
- [x] Sistema de filtros e busca
- [x] Calendário de agendamento
- [x] Gráficos de relatórios
- [x] Sistema de alertas

### 🔄 Para Desenvolvimento Futuro
- [ ] Integração com backend/API
- [ ] Autenticação de usuários
- [ ] Upload real de arquivos
- [ ] Comunicação em tempo real com TVs
- [ ] Notificações push
- [ ] Exportação de relatórios em PDF

## Como Usar

1. **Abra o arquivo `dashboard.html`** em um navegador web moderno
2. **Navegue pelas seções** usando o menu lateral
3. **Teste as funcionalidades** de cada módulo
4. **Personalize conforme necessário** editando os arquivos CSS e JavaScript

## Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS/Android)

## Próximos Passos

Para implementar o sistema em produção, será necessário:

1. **Backend Development**
   - API REST para gerenciamento de dados
   - Banco de dados para armazenamento
   - Sistema de autenticação

2. **Integração com TVs**
   - Protocolo de comunicação com dispositivos
   - Sistema de sincronização
   - Monitoramento em tempo real

3. **Deploy e Infraestrutura**
   - Servidor web
   - CDN para assets
   - Sistema de backup

## Suporte

Para dúvidas ou sugestões sobre o QR TV Indoor, entre em contato através dos canais oficiais da QRMidia.

---

**Desenvolvido para QRMidia** - Sistema completo de gestão de TVs corporativas

