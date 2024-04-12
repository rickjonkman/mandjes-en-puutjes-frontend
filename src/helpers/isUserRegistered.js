
export const isUserRegistered = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('registration-success') === 'true';
}