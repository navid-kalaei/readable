const BASE_URL = "http://localhost:3001";
const headers = {
    Authorization: "navid-kalaei-readable",
    "Content-Type": "application/json"
};

const getUrl = (route) => `${BASE_URL}${route}`;

const responseResolved = (res) => {
    res.json().then((data) => {
        if (data.error) {
            return Promise.reject(data)
        }

        return data;
    })
};

export const fetchCategories = () => (
    fetch(getUrl("/categories"), { headers }).then(responseResolved)
);

export const fetchPosts = (category = null) => {
    const url = category ? `/${category}/posts` : "/posts";
    return fetch(getUrl(url), { headers }).then(responseResolved);
};

export const fetchPost = (id) => (
    fetch(getUrl(`/posts/${id}`), { headers }).then(responseResolved)
);