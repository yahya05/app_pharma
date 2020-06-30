import { observable , action , computed } from 'mobx'
import React , { Component } from 'react'

class AppStore {
    @observable email = null;
    @observable loggedin = false ;
    @observable uid = null ;
    @observable nom = null ;
    @observable prenom = null ;
    @observable type = null ;
    @observable phone_pharma = null ;
    @observable name_pharma = null ;
    @observable id_pharma = null ;
    @observable com = null ;
    @observable ord = [] ;
    @observable test = null;
    @observable arr_client = null;
    @observable arr_pharma = null;
    @observable etat = null;
    @observable pr = null;
    @observable key = null;
    @observable avatarSource = null
    @observable lat = null
    @observable lng = null
    @observable toggle = null
    @observable add = null
    @observable data_pharma = null

    @action set_data_pharma = (data) => {
        this.data_pharma = data
    }
    
    @action set_add = (data) => {
        this.add = data
    }
    @action set_toggle = (data) => {
        this.toggle = data
    }
    @action setlng = (data) => {
        this.lng = data
    }
    @action setlat = (data) => {
        this.lat = data
    }
    @action set_avatar = (data) => {
        this.avatarSource = data
    }

    @action set_key = (data) => {
        this.key = data
    }

    @action setpr = (data) => {
        this.pr = data
    }

    @action set_arr_client = (arr) => {
        this.arr_client = arr
    }


    @action set_arr_pharma = (arr) => {
        this.arr_pharma = arr
    }

    @action set_test = (test) => {
        this.test = test
    }


    @action set_ord = (ord) => {
        this.ord = ord
    }

    @action set_com = (com) => {
        this.com = com
    }

    @action setphone_pharma = (phone_pharma) => {
        this.phone_pharma = phone_pharma
    }

    @action setid_pharma = (id_pharma) => {
        this.id_pharma = id_pharma
    }

    @action setname_pharma = (name_pharma) => {
        this.name_pharma = name_pharma
    }

    @action login = (etat) => {
        this.loggedin = etat
    }

    @action setetat = (etat) => {
        this.etat = etat
    }

    @action setid = (uid) => {
        this.uid = uid
    }

    @action setnom = (nom) => {
        this.nom = nom
    }

    @action setprenom = (prenom) => {
        this.prenom = prenom
    }

    @action setemail = (email) => {
    this.email = email    
    }

    @action settype = (type) => {
        this.type = type    
        }
}
export default AppStore