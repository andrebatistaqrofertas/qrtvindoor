// QR TV Indoor - JavaScript Principal

// Utilitários gerais
function showNotification(message, type = 'info') {
    // Criar notificação toast
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Validação de formulários
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger-color)';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--border-color)';
        }
    });
    
    return isValid;
}

// Formatação de dados
function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR').format(date);
}

function formatTime(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

// Gerenciamento de modais
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Responsividade - Menu mobile
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar botão de menu mobile se não existir
    if (window.innerWidth <= 768) {
        addMobileMenuButton();
    }
    
    // Event listeners para formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(form.id)) {
                e.preventDefault();
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'danger');
            }
        });
    });
});

function addMobileMenuButton() {
    const header = document.querySelector('.header');
    if (header && !header.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'btn btn-secondary mobile-menu-btn';
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn.onclick = toggleMobileMenu;
        header.insertBefore(menuBtn, header.firstChild);
    }
}

// Redimensionamento da janela
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        addMobileMenuButton();
    } else {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }
});

// Exportar funções para uso global
window.QRTVIndoor = {
    showNotification,
    validateForm,
    formatDate,
    formatTime,
    openModal,
    closeModal,
    toggleMobileMenu
};



// Funções de Gerenciamento de TV (para tvs.html e dashboard.html)
function openTVModal(tvId = null) {
    const modal = document.getElementById('tvModal');
    if (!modal) return;

    const modalTitle = document.getElementById('tvModalTitle');
    const tvNameInput = document.getElementById('tvName');
    const tvLocationInput = document.getElementById('tvLocation');
    const tvResolutionInput = document.getElementById('tvResolution');
    const tvDescriptionInput = document.getElementById('tvDescription');
    const tvPlaylistSelect = document.getElementById('tvPlaylist');
    const pairingCodeInput = document.getElementById('pairingCode');

    if (tvId) {
        modalTitle.textContent = 'Editar TV';
        // Simular carregamento de dados da TV para edição
        tvNameInput.value = `TV ${tvId}`;
        tvLocationInput.value = `Localização ${tvId}`;
        tvResolutionInput.value = '1920x1080';
        tvDescriptionInput.value = `Descrição da TV ${tvId}`;
        tvPlaylistSelect.value = 'playlist1'; // Exemplo
        pairingCodeInput.value = 'QRT-2024-001'; // Exemplo
    } else {
        modalTitle.textContent = 'Nova TV';
        tvNameInput.value = '';
        tvLocationInput.value = '';
        tvResolutionInput.value = '';
        tvDescriptionInput.value = '';
        tvPlaylistSelect.value = '';
        pairingCodeInput.value = 'QRT-2024-001'; // Gerar novo código para nova TV
    }

    openModal('tvModal');
}

function saveTV() {
    if (validateForm('tvForm')) {
        showNotification('TV salva com sucesso!', 'success');
        closeModal('tvModal');
    } else {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'danger');
    }
}

function editTV(tvId) {
    openTVModal(tvId);
}

function testConnection(tvId) {
    showNotification(`Testando conexão da TV ${tvId}...`, 'info');
    // Simular teste de conexão
    setTimeout(() => {
        showNotification(`Conexão da TV ${tvId} estabelecida!`, 'success');
    }, 1500);
}

function restartTV(tvId) {
    showNotification(`Reiniciando TV ${tvId}...`, 'info');
    // Simular reinício
    setTimeout(() => {
        showNotification(`TV ${tvId} reiniciada com sucesso!`, 'success');
    }, 1500);
}

function deleteTV(tvId) {
    if (confirm(`Tem certeza que deseja excluir a TV ${tvId}?`)) {
        showNotification(`TV ${tvId} excluída.`, 'warning');
        // Lógica para remover a linha da tabela/card
    }
}

function generatePairingCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'QRT-';
    for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += '-';
    for (let i = 0; i < 3; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('pairingCode').value = result;
    showNotification('Novo código de pareamento gerado!', 'info');
}

// Exportar funções de TV para uso global
window.QRTVIndoor = {
    ...window.QRTVIndoor,
    openTVModal,
    saveTV,
    editTV,
    testConnection,
    restartTV,
    deleteTV,
    generatePairingCode
};

