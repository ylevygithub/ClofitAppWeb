const BaseUrl = "https://api.clofit.fr";

type Headers = { [key: string]: string };

interface InscriptionRequest {
    email: string;
    password: string;
    name: string;
}

interface InscriptionResponse {
    userId: string;
    token: string;
    statusMessage: string;
}

interface ConnexionRequest {
  email: string;
  password: string;
}

interface ConnexionResponse {
  statusMessage: string;
  userId: string;
  token: string;
}

interface DeleteRequest {
  userId: string;
}

interface DeleteResponse {
  statusMessage: string;
}

interface AddProfilRequest {
  name: string;
  epaule: string;
  dos: string;
  poitrine: string;
  userId: string;
}

interface AddProfilResponse {
  statusMessage: string;
}

interface ChangePwRequest {
  oldPass: string;
  userId: string;
  newPass: string;
}

interface ChangePwResponse {
  statusMessage: string;
}

export class ClofitAPI {
    static async post<T>(url: string, body: T, headers: Headers = {}): Promise<Response> {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json', ...headers },
            body: JSON.stringify(body),
        };
        return fetch(`${BaseUrl}${url}`, requestOptions);
    }

    static async inscrireUtilisateur(data: InscriptionRequest): Promise<InscriptionResponse> {
        const response = await this.post<InscriptionRequest>('/users/inscription', data);
        return response.json() as Promise<InscriptionResponse>;
    }

    static async connexionUtilisateur(data: ConnexionRequest): Promise<ConnexionResponse> {
      const response = await this.post<ConnexionRequest>('/users/connexion', data);
      return response.json() as Promise<ConnexionResponse>;
    }

    static async deleteUtilisateur(token: string, data: DeleteRequest): Promise<DeleteResponse> {
      const response = await this.post<DeleteRequest>(`/users/delete/?token=${token}`, data);
      return response.json() as Promise<DeleteResponse>;
    }

    static async addProfil(token: string, data: AddProfilRequest): Promise<AddProfilResponse> {
      const response = await this.post<AddProfilRequest>(`/users/profil/register/?token=${token}`, data);
      return response.json() as Promise<AddProfilResponse>;
    }

    static async ChangePasswordUtilisateur(token: string, data: ChangePwRequest): Promise<ChangePwResponse> {
      const response = await this.post<ChangePwRequest>(`/users/changepassword/?token=${token}`, data);
      return response.json() as Promise<ChangePwResponse>;
    }
}
