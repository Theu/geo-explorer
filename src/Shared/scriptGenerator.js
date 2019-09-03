export const scriptGenerator = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.setState({ mapIsReady: true });
    });

    document.body.appendChild(script);
  }
