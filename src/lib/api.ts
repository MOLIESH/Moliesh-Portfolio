export const sendContactForm = async (data: ContactMessage) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    // Attempt to extract the error message from the response body if available
    const errorMessage = await res.json().catch(() => null);
    throw new Error(
      errorMessage?.message ||
        `Failed to send message with status ${res.status}`,
    );
  }

  return res.json();
};
