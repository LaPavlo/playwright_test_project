export function generateRandomEmail(): string {
    return `user${Date.now()}@example.com`;
}

export function generateRandomUsername(): string {
    return `user${Math.floor(Math.random() * 100000)}`;
}
