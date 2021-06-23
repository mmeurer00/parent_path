import React from 'react';

const CommunityForm = () => {
    return (
      <form>
        <h2>Make a post!</h2>
        <div>
          <input type="text" name="title" placeholder="Title" />
          <label htmlFor="title">Title</label>
        </div>
        <div>
          <input type="tag" name="tag" placeholder="tag" />
          <label htmlFor="tag">Tag</label>
        </div>
        <div>
          <input type="content" name="content" placeholder="content" />
          <label htmlFor="content">Content</label>
        </div>
        <input type="submit" value="Create Post" />
      </form>
    );
}

export default CommunityForm; 