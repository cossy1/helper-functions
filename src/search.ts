// function to search an array of objects

const search = (data, keyword) => {
    return data?.filter(data => {
        return (
            keyword.length === 0 ||
            data?.vendor?.toLowerCase().includes(keyword) ||
            data?.status?.toLowerCase().includes(keyword) ||
            data?.name?.toLowerCase().includes(keyword)
        );
    });
};