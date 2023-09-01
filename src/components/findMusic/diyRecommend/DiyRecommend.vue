<template>
    <el-container style="margin-top: 25px;margin-bottom: 45px;">
        <el-header height="300px;">
            <!--轮播图-->
            <el-carousel type="card">
                <el-carousel-item 
                    v-for="(item,index) in bannerInfo" 
                    :key="index">
                    <el-image 
                        @click="changeUrl(item.targetId)" 
                        :src="item.imageUrl"
                        fit="contain"
                        style="height: 300px;"></el-image>
                    <el-tag 
                        :type="item.typeTitle === '独家' ? 'danger' : 'primary'" 
                        effect="dark"
                        style="position: absolute; top:85%;left: 90%;border-radius: 14px">
                        {{item.typeTitle}}
                    </el-tag>
                </el-carousel-item>
            </el-carousel>
        </el-header>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                //轮播图数据列表
                bannerInfo: [],
                //需要播放的音乐地址
                musicUrl: '',
                //当前音乐的详情对象
                music: {},
            }
        },
        props: {},
        created() {
            //获取轮播图数据
            this.getBannerInfo();
        },
        methods: {
            //获取轮播图数据
            getBannerInfo() {
                this.$http.get('banner').then(res => {
                    if (res.status !== 200) this.$message.error('轮播图数据获取失败')
                    this.bannerInfo = res.data.banners
                })
            },
            changeUrl(musicId) {
                if (musicId === null) return
                this.getMusicUrl(musicId)
                this.getMusicDetail(musicId)
                //防止url未获得提交信息到父组件
                if (this.musicUrl !== '') {
                    this.$emit('setParentMusicUrl', this.musicUrl, this.music)
                }
            },
            //根据id获取音乐url
            getMusicUrl(musicId) {
                this.$http.get('song/url', {params: {id: musicId}}).then(res => {
                    this.musicUrl = res.data.data[0].url
                })
            },
            //根据id获取音乐详情
            getMusicDetail(musicId) {
                this.$http.get('song/detail', {params: {ids: musicId}}).then(res => {
                    this.music = res.data.songs[0]
                })
            },
            //双击播放音乐
            dblclickPlayMusic(row) {
                this.changeUrl(row.id)
            },
        }
    }
</script>

<style lang="less" scoped>
    [class*=el-col-] {
        display: inline-block;
        float: none;
    }

    h1 {
        font-weight: 500;
    }
</style>
