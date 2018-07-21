import {
    RECEIVE_GET_IMAGES,
    RECEIVE_ADD_IMAGE,
    RECEIVE_EDIT_IMAGE,
    RECEIVE_DELETE_IMAGE,
} from '../actions/actions';
import _ from 'lodash';

const initialState = [
    {
        id: '123456777',
        link: 'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_SUPUN4_3_52ab8fd51b5a34.80060929.jpg',
        tooltip: 'SUPERMAN. Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there are probably kids shouting it in Swahili as you read this.'
    },
    {
        id: '123456789',
        link: 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-batman-statue-prime1-studio-feature-903246-1.jpg',
        tooltip: ''
    },
    {
        id: '123456788',
        link: 'https://img00.deviantart.net/3ab7/i/2016/144/9/9/catwoman_by_arkenstellar-da3lrzw.jpg',
        tooltip: 'CATWOMAN. She is made countless comic book appearances since her debut in 1940 BATMAN #1. She is been portrayed by two Oscar-nominated actresses—Michelle Pfeiffer in Tim Burtons classic film "Batman Returns" and Anne Hathaway in director Christopher Nolans critically acclaimed blockbuster "The Dark Knight Rises." And she is been featured in almost every Batman-related animated or video game incarnation.'
    },
    {
        id: '123456666',
        link: 'http://media.comicbook.com/uploads1/2014/11/bm-cv37-large-112203-640x320.jpg',
        tooltip: 'JOKER. Do not make us laugh. The green hair. The crazed smile. The maniacal cackle. You know exactly who he is and how far he would go to put a smile on your face.'
    },
    {
        id: '123455555',
        link: 'https://www.dccomics.com/sites/default/files/GalleryComics_1920x1080_20160120_PIVY_CYCLE_Cv1_5693efc92b0c83.04562770.jpg',
        tooltip: ''
    },
];

export default (state = initialState, { type, data }) => {
    switch (type) {
    case RECEIVE_GET_IMAGES:
        return data;
    case RECEIVE_ADD_IMAGE:
        return [data, ...state];
    case RECEIVE_EDIT_IMAGE:
        return _.map(state, item => item.id === data.id ? {...item, tooltip: data.tooltip} : item);
    case RECEIVE_DELETE_IMAGE:
        return _.filter(state, item => item.id !== data);
    default:
        return state;
    }
};
