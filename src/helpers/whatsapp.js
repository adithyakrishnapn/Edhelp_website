/**
 * Opens a WhatsApp chat with a pre-filled message suitable for the requested service.
 * @param {string} serviceName - The name of the service (e.g., "CV Writing", "Academic Help").
 */
export const openWhatsApp = (serviceName) => {
    // Replace with the actual business number. 
    // Using a placeholder for now as per plan, but in a real scenario, this would be provided.
    const phoneNumber = "7560989659";

    let messageText = `Hi EDhelp, I am interested in your ${serviceName} service. Could you please provide more details?`;

    // Customizing messages based on service type for better context
    if (serviceName.toLowerCase().includes('cv') || serviceName.toLowerCase().includes('resume')) {
        messageText = `Hi EDhelp, I need help with my CV/Resume. I want to stand out to recruiters!`;
    } else if (serviceName.toLowerCase().includes('academic')) {
        messageText = `Hi EDhelp, I have an academic writing task I need assistance with.`;
    } else if (serviceName.toLowerCase().includes('design')) {
        messageText = `Hi EDhelp, I'm looking for some creative design work.`;
    }

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
};
