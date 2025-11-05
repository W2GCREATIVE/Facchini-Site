import axios from "axios";

export const sendContact = async (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
  isArchitect: boolean;
}) => {
  try {
    const response = await axios.post(
      "https://facchini-api.vercel.app/api/send-contact",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CONTACT_API_KEY,
        },
      }
    );
    return { ok: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        error: error.response?.data || error.message,
      };
    }
    return {
      ok: false,
      error: "Erro interno do servidor",
    };
  }
};
