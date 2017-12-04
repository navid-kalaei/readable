import uuid from 'uuid/v1';

const BASE_URL = "http://localhost:3001";
const headers = {
    Authorization: "navid-kalaei-readable",
    "Content-Type": "application/json"
};

const getUrl = (route) => `${BASE_URL}${route}`;

const responseResolved = (res) => (
    res.json().then((data) => {
        if (data.error) {
            return Promise.reject(data)
        }

        if (!Array.isArray(data) && !Object.keys(data).length) {
            return Promise.reject({
                error: "No data",
                data
            });
        }

        return data;
    })
);

export const fetchCategories = () => (
    fetch(getUrl("/categories"), {headers}).then(responseResolved)
);

export const fetchPosts = (category = null) => {
    const url = category ? `/${category}/posts` : "/posts";
    return fetch(getUrl(url), {headers}).then(responseResolved);
};

export const fetchPost = (id) => (
    fetch(getUrl(`/posts/${id}`), {headers}).then(responseResolved)
);

export const addPost = ({title, body, author, category}) => (
    fetch(
        getUrl('/posts'),
        {
            method: "POST",
            headers,
            body: JSON.stringify({
                id: uuid(),
                timestamp: Date.now(),
                author,
                body,
                title,
                category
            })
        }
    )
).then(responseResolved);

export const deletePost = (id) => (
    fetch(
        getUrl(`/posts/${id}`),
        {
            method: "DELETE",
            headers
        }
    ).then(responseResolved)
);

export const votePost = ({ id, vote }) => {
    const option = vote === 1 ? "upVote" : "downVote";

    return fetch(
        getUrl(`/posts/${id}`), {
            method: "POST",
            headers,
            body: JSON.stringify({option})
        }
    ).then(responseResolved)
};

export const fetchComments = (id) => (
    fetch(getUrl(`/posts/${id}/comments`), {headers}).then(responseResolved)
);

export const fetchComment = (id) => (
    fetch(
        getUrl(`/comments/${id}`),
        {
            headers
        }
    ).then(responseResolved)
);

export const voteComment = ({ id, vote }) => {
    const option = vote === 1 ? "upVote" : "downVote";

    return fetch(
        getUrl(`/comments/${id}`), {
            method: "POST",
            headers,
            body: JSON.stringify({option})
        }
    ).then(responseResolved)
};

export const addComment = ({ postId, author, body }) => (
    fetch(
        getUrl('/comments'), {
            method: "POST",
            headers,
            body: JSON.stringify({
                id: uuid(),
                timestamp: Date.now(),
                parentId: postId,
                author,
                body
            })
        }
    ).then(responseResolved)
);

export const updateComment = ({ id, body }) => (
    fetch(
        getUrl(`/comments/${id}`), {
            method: "PUT",
            headers,
            body: JSON.stringify({
                timestamp: Date.now(),
                body
            })
        }
    ).then(responseResolved)
);

export const deleteComment = (id) => (
    fetch(
        getUrl(`/comments/${id}`), {
            method: "DELETE",
            headers
        }
    ).then(responseResolved)
);