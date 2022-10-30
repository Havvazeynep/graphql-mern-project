import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation AddProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`

const UPDATE_PROJECT = gql`
    mutation UpdateProject($name: String!, $description: String!, $status: ProjectStatusUpdate!) {
        updateProject(name: $name, description: $description, status: $status) {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`

const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }
`

export { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT }