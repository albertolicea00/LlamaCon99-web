function app() {
  return {
    mobileMenuOpen: false,
    notifyOpen: false,
    darkMode: localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    init() {
      this.$watch('darkMode', val => localStorage.setItem('darkMode', val));
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
