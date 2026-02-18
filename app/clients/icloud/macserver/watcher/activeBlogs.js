const activeBlogs = new Set();

const markActive = (blogID) => {
  activeBlogs.add(blogID);
};

const markInactive = (blogID) => {
  activeBlogs.delete(blogID);
};

const isActive = (blogID) => activeBlogs.has(blogID);

const listActive = () => Array.from(activeBlogs);

export { markActive, markInactive, isActive, listActive };
