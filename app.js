function app() {
  return {
    mobileMenuOpen: false,
    notifyOpen: false,
    githubStars: null,
    darkMode: localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    init() {
      let scrollY = 0;
      this.$watch('notifyOpen', open => {
        if (open) {
          scrollY = window.scrollY;
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollY}px`;
          document.body.style.left = '0';
          document.body.style.right = '0';
        } else {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.left = '';
          document.body.style.right = '';
          window.scrollTo(0, scrollY);
        }
      });
      this.$watch('darkMode', val => localStorage.setItem('darkMode', val));
      fetch('https://api.github.com/repos/albertolicea00/LlamaCon99')
        .then(r => r.json())
        .then(repo => {
          if (repo.stargazers_count !== undefined) this.githubStars = repo.stargazers_count;
        })
        .catch(() => {});
    }
  }
}

function notifyForm() {
  return {
    email: '',
    sent: false,
    loading: false,
    error: '',
    async submit() {
      if (!this.email) return;
      this.loading = true;
      this.error = '';

      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        });

        if (res.ok) {
          this.sent = true;
        } else {
          this.error = 'Hubo un error al suscribirte. Inténtalo de nuevo.';
        }
      } catch (err) {
        this.error = 'Error de red. Por favor, revisa tu conexión e inténtalo de nuevo.';
      } finally {
        this.loading = false;
      }
    }
  }
}
