import axios from "axios";

export const GetApi = async (filters) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_STRAPI_URL}${filters}`
		);

		// Kontrollera om svarskoden är inom det förväntade intervallet
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		} else {
			throw new Error(`Felaktigt svar från servern: ${response.status}`);
		}
	} catch (error) {
		console.error("Fel vid GET API-anrop:", error);
		throw error; // Kasta felet så att det kan hanteras där funktionen anropas
	}
};

export default GetApi;
