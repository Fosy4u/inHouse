
export const getData = async (url) => {
    const res = await fetch(url, {
        next: {
        revalidate: 3600,
        },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
}