//import axios from 'axios';
import data from './payments-data.json';

//const API_URL = `/services/payments-data.json`;

export default {
    getPayments() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    }
}