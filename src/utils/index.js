export function createResource (attributes){
    return {
        type: 'todos',
        attributes: {
            ...attributes
        }
    }
}