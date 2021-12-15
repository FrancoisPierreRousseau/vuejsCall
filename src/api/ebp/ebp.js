import axios from 'axios';

class Ebp {
    constructor(config) {
        this.config = config;
        this.ticket = {
            read: (id, parameters) =>
                this.call(`/tickets/${id}`, {parameters}),
            all: () =>
                [
                    {
                        Icon_priorité: 'Icon 1',
                        N_ticket: 'Numero ticket 1',
                        Etat: 'En cours',
                        Produit: 'Produit 1',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 1',
                        Client: 'Client 1',
                        Contact: 'Contact 1',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 1'
                    },
                    {
                        Icon_priorité: 'Icon 2',
                        N_ticket: 'Numero ticket 2',
                        Etat: 'En attente',
                        Produit: 'Produit 2',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 2',
                        Client: 'Client 2',
                        Contact: 'Contact 2',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 2'
                    },
                    {
                        Icon_priorité: 'Icon 3',
                        N_ticket: 'Numero ticket 3',
                        Etat: 'Terminé',
                        Produit: 'Produit 3',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 3',
                        Client: 'Client 3',
                        Contact: 'Contact 3',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 3'
                    },
                    {
                        Icon_priorité: 'Icon 4',
                        N_ticket: 'Numero ticket 4',
                        Etat: 'En cours',
                        Produit: 'Produit 4',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 4',
                        Client: 'Client 4',
                        Contact: 'Contact 4',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 4'
                    },
                    {
                        Icon_priorité: 'Icon 5',
                        N_ticket: 'Numero ticket 5',
                        Etat: 'En attente',
                        Produit: 'Produit 5',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 5',
                        Client: 'Client 5',
                        Contact: 'Contact 5',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 5'
                    },
                    {
                        Icon_priorité: 'Icon 6',
                        N_ticket: 'Numero ticket 6',
                        Etat: 'Terminé',
                        Produit: 'Produit 6',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 6',
                        Client: 'Client 6',
                        Contact: 'Contact 6',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 6'
                    },
                    {
                        Icon_priorité: 'Icon 7',
                        N_ticket: 'Numero ticket 7',
                        Etat: 'En cours',
                        Produit: 'Produit 7',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 7',
                        Client: 'Client 7',
                        Contact: 'Contact 7',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 7'
                    },
                    {
                        Icon_priorité: 'Icon 8',
                        N_ticket: 'Numero ticket 8',
                        Etat: 'En attente',
                        Produit: 'Produit 8',
                        Date_création: '11/01/2022',
                        Intervenant: 'Intervenant 8',
                        Client: 'Client 8',
                        Contact: 'Contact 8',
                        Numero_tel: '02 40 30  33 33',
                        Objet_demande: 'Objet 8'
                    },
                ]
        }

        this.client = {
            all: () =>
                [
                    {
                        Code: 'Code client 1',
                        Client: 'Dickerson',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 1',
                        Commercial: 'Commercial 1'
                    },
                    {
                        Code: 'Code client 2',
                        Client: 'Larsen',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 2',
                        Commercial: 'Commercial 2'
                    },
                    {
                        Code: 'Code client 3',
                        Client: 'Geneva',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 3',
                        Commercial: 'Commercial 3'
                    },
                    {
                        Code: 'Code client 4',
                        Client: 'Jami',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 4',
                        Commercial: 'Commercial 4'
                    }
                ]

        }

        this.contact = {
            all: () =>
                [
                    {
                        Code: 'Code client 1',
                        Client: 'Dickerson',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 1',
                        Commercial: 'Commercial 1'
                    },
                    {
                        Code: 'Code client 2',
                        Client: 'Larsen',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 2',
                        Commercial: 'Commercial 2'
                    },
                    {
                        Code: 'Code client 3',
                        Client: 'Geneva',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 3',
                        Commercial: 'Commercial 3'
                    },
                    {
                        Code: 'Code client 4',
                        Client: 'Jami',
                        Téléphone: '02-55-45-77-70',
                        Agence: 'Agence 4',
                        Commercial: 'Commercial 4'
                    }
                ]

        }
    }

    async call(path, {method = 'get', data, parameters = {}} = {}) {
        const queryParameters = Object
            .keys(parameters)
            .map(key => `${key}=${encodeURIComponent(parameters[key])}`)
            .join('&')
        const url = `${this.config.basePath}${path}/?${queryParameters}`
        return axios.request(url, {method, data, withCredentials: true});
    }
}

export default Ebp
