import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data: platform } = usePlatforms();
    return platform?.results.find((platform) => platform.id === id);
};

export default usePlatform;