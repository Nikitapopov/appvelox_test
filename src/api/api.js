import axios from "axios";

export const instance = axios.create({
    // baseURL: '',
    // headers: {
    // },
});

export const recordsAPI = {
    fetchRecords() {
        return Promise.resolve([
            {date: new Date("Mon Jun 15 2020 15:30:00 GMT+0300"), clinic: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`, doctor: {photo: require('../assets/img/doctors/1.svg'), name: 'Малушко Т. Н.', specialization: 'Хирургия'}},
            {date: new Date("Mon Jun 15 2020 18:30:00 GMT+0300"), clinic: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`, doctor: {photo: require('../assets/img/doctors/2.svg'), name: 'Харьков В. С.', specialization: 'Терапевтическое отделение'}},
            {date: new Date("Thu Oct 15 2020 12:10:00 GMT+0300"), clinic: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`, doctor: {photo: require('../assets/img/doctors/1.svg'), name: 'Малушко Т. Н.', specialization: 'Хирургия'}},
            {date: new Date("Thu Oct 15 2020 12:30:00 GMT+0300"), clinic: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`, doctor: {photo: require('../assets/img/doctors/2.svg'), name: 'Харьков В. С.', specialization: 'Терапевтическое отделение'}},
            {date: new Date("Mon Oct 12 2020 17:00:00 GMT+0300"), clinic: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`, doctor: {photo: require('../assets/img/doctors/1.svg'), name: 'Малушко Т. Н.', specialization: 'Хирургия'}},
        ]);
    },
};