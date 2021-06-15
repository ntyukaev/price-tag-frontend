export function selectPhoto(photo) {
    return {
        type: 'PHOTO_SELECTED',
        payload: photo
    }
}