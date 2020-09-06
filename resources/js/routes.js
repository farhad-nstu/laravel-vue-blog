import Home from './components/Admin/Home';
import Posts from './components/Admin/Post/Posts';
import AddPost from './components/Admin/Post/AddPost';
import EditPost from './components/Admin/Post/EditPost';
import Categories from './components/Admin/Category/Categories';
import AddCategory from './components/Admin/Category/AddCategory';
import EditCategory from './components/Admin/Category/EditCategory';

export const routes = [
  {
  	path: '/home',
  	component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost
  },
  {
    path: "/edit-post/:id",
    name: "EditPost",
    component: EditPost
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/add-category",
    name: "AddCategory",
    component: AddCategory
  },
  {
    path: "/edit-category/:id",
    name: "EditCategory",
    component: EditCategory
  },
];