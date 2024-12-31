




document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');

    // Alternar para a tela de cadastro
    document.getElementById('switchToSignup').addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.classList.remove('active');
        signupContainer.classList.add('active');
    });

    // Alternar para a tela de login
    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        signupContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    // Validação do Login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const loginError = document.getElementById('loginError');

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            loginError.style.display = 'none';
            alert(`Bem-vindo, ${user.name}!`);
            // Aqui você pode redirecionar para uma página protegida
            window.location.href = "painel.html"; // Substitua pela URL da página desejada
        } else {
            loginError.textContent = 'Email ou senha inválidos!';
            loginError.style.display = 'block';
        }
    });

    // Validação do Cadastro
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const signupError = document.getElementById('signupError');

        if (password !== confirmPassword) {
            signupError.textContent = 'As senhas não coincidem!';
            signupError.style.display = 'block';
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(u => u.email === email);

        if (userExists) {
            signupError.textContent = 'Este email já está cadastrado!';
            signupError.style.display = 'block';
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            signupError.style.display = 'none';
            alert('Cadastro realizado com sucesso!');
            signupContainer.classList.remove('active');
            loginContainer.classList.add('active');
        }
    });
});







/*MENU DO PAINEL*/
    function toggleMenu() {
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');
        
        if (sidebar.style.width === '250px' || sidebar.style.width === '') {
            sidebar.style.width = '0';
            content.style.marginLeft = '0';
        } else {
            sidebar.style.width = '250px';
            content.style.marginLeft = '250px';
        }
    }
/*MENU DO PAINEL*/



