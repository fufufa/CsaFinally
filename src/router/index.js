import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import FindMusic from "../components/findMusic/diyRecommend/FindMusic";
import DiyRecommend from "../components/findMusic/diyRecommend/DiyRecommend";;
import MusicListPage from "../components/findMusic/musicList/MusicListPage";
import SingerDetail from "../components/findMusic/singer/SingerDetail";
import PlayMusicDetailPage from "../components/findMusic/PlayMusicPage/PlayMusicDetailPage";
import Video from "../components/findMusic/video/Video";
import VideoListTable from "../components/findMusic/video/VideoListTable";
import MvListTable from "../components/findMusic/video/MvListTable";
import CloudMusic from "../components/findMusic/cloud/CloudMusic";
import SearchPage from "../components/findMusic/search/SearchPage";
import SearchBySong from "../components/findMusic/search/SearchBySong";
import SearchBySinger from "../components/findMusic/search/SearchBySinger";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/findMusic',
        //默认是发现音乐界面
        children: [
            {
                path: '/findMusic',
                component: FindMusic,
                redirect: '/diyRecommend',
                //右侧的个性推荐菜单
                children: [
                    //个性推荐
                    {path: '/diyRecommend', component: DiyRecommend},
                    //歌单模块
                    {path: '/musicListPage', component: MusicListPage},
                ]
            },
            //歌手详情页面
            {
                path: '/singer/:id',
                component: SingerDetail,
            },
            //播放的详情页,歌词等等
            {
                path: 'musicDetail/:id',
                component: PlayMusicDetailPage
            },
            //视频模块
            {
                path: '/video',
                component: Video,
                redirect: '/videoPage',
                children: [
                    {
                        path: '/videoPage',
                        component: VideoListTable
                    },
                    {
                        path: '/mvPage',
                        component: MvListTable
                    }
                ]
            },
            //音乐云盘
            {
                path: '/cloudMusic',
                component: CloudMusic
            },
            //搜索结果页
            {
                path: '/search/:data',
                component: SearchPage,
                children: [
                    {
                        path: '/searchBySong/:data',
                        component: SearchBySong
                    },
                    {
                        path: '/searchBySinger/:data',
                        component: SearchBySinger
                    },
                ]
            }
        ]
    }
]


const router = new VueRouter({
    routes
})

export default router
