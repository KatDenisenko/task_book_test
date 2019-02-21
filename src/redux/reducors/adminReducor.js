export default function admin (state=false,action) {
    switch(action.type){
        case 'ADMIN':
            return true;

        case 'USER':
        return false;

        default:
            return state;
    }
}
