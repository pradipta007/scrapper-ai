'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '';
import { Input } from '@';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Image, Film, Users } from 'lucide-react';

interface InstagramUserData {
  username: string;
  full_name: string;
  biography: string;
  edge_followed_by: { count: number };
  edge_follow: { count: number };
  is_private: boolean;
  is_verified: boolean;
  profile_pic_url: string;
  id: string;
  edge_owner_to_timeline_media: {
    count: number;
    edges: Array<{
      node: {
        is_video: boolean;
        edge_media_to_comment: { count: number };
      }
    }>;
  };
}

interface TikTokUserData {
  userInfo: {
    user: {
      id: string;
      uniqueId: string;
      nickname: string;
      avatarLarger: string;
      signature: string;
      verified: boolean;
      privateAccount: boolean;
    };
    stats: {
      followerCount: number;
      followingCount: number;
      heartCount: number;
      videoCount: number;
    };
  };
}

interface Metrics {
  totalPhotos: number;
  totalVideos: number;
  followers: number;
  following: number;
}

export default function AdminDashboardPage() {
  const [env, setEnv] = useState<'instagram' | 'tiktok'>('instagram');
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState<InstagramUserData | TikTokUserData | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  const handleSearch = () => {
    if (env === 'instagram') {
      const mockData: InstagramUserData = {
        username: "pradipta.ghatak",
        full_name: "Pradipta Ghatak",
        biography: "\"Rather than love, than money, than fame, give me truth\" - Henry David Thoreau",
        edge_followed_by: { count: 140 },
        edge_follow: { count: 173 },
        is_private: false,
        is_verified: false,
        id: "57385575430",
        profile_pic_url: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/441259147_758809309708928_5039590993515289700_n.jpg",
        edge_owner_to_timeline_media: {
          count: 6,
          edges: [
            { node: { is_video: false, edge_media_to_comment: { count: 17 } } },
            { node: { is_video: true, edge_media_to_comment: { count: 7 } } },
            { node: { is_video: false, edge_media_to_comment: { count: 5 } } },
            { node: { is_video: true, edge_media_to_comment: { count: 3 } } },
            { node: { is_video: false, edge_media_to_comment: { count: 8 } } },
            { node: { is_video: false, edge_media_to_comment: { count: 12 } } }
          ]
        }
      };

      setUserData(mockData);

      const posts = mockData.edge_owner_to_timeline_media.edges;
      const totalVideos = posts.filter(post => post.node.is_video).length;
      const totalPhotos = posts.filter(post => !post.node.is_video).length;

      setMetrics({
        totalPhotos,
        totalVideos,
        followers: mockData.edge_followed_by.count,
        following: mockData.edge_follow.count
      });
    } else {
      const mockTikTokData: TikTokUserData = {
        userInfo: {
          user: {
            id: "107955",
            uniqueId: "tiktok",
            nickname: "TikTok",
            avatarLarger: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ba67b11de451691939223e9d978e613a~tplv-tiktokx-cropcenter:1080:1080.jpeg",
            signature: "One TikTok can make a big impact",
            verified: true,
            privateAccount: false
          },
          stats: {
            followerCount: 89900000,
            followingCount: 6,
            heartCount: 388900000,
            videoCount: 1192
          }
        }
      };

      setUserData(mockTikTokData);
      
      setMetrics({
        totalPhotos: 0,
        totalVideos: mockTikTokData.userInfo.stats.videoCount,
        followers: mockTikTokData.userInfo.stats.followerCount,
        following: mockTikTokData.userInfo.stats.followingCount
      });
    }
  };

  const renderUserInfo = () => {
    if (!userData) return null;

    if ('username' in userData) {
      // Instagram user
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Information
            </CardTitle>
            <Badge className="ml-auto">Active</Badge>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">Environment: {env}</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{userData.full_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium">@{userData.username}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-medium">{userData.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Posts</p>
                <p className="font-medium">{userData.edge_owner_to_timeline_media.count}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="font-medium">{userData.is_private ? 'Private' : 'Public'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Verified</p>
                <p className="font-medium">{userData.is_verified ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    } else {
      // TikTok user
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Information
            </CardTitle>
            <Badge className="ml-auto">Active</Badge>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">Environment: {env}</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{userData.userInfo.user.nickname}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium">@{userData.userInfo.user.uniqueId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-medium">{userData.userInfo.user.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Videos</p>
                <p className="font-medium">{userData.userInfo.stats.videoCount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="font-medium">
                  {userData.userInfo.user.privateAccount ? 'Private' : 'Public'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Verified</p>
                <p className="font-medium">
                  {userData.userInfo.user.verified ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Monitor user analytics and performance metrics</p>

      <Card>
        <CardHeader>
          <CardTitle>User Information Lookup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="instagram" onValueChange={setEnv} className="w-full">
            <TabsList>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            </TabsList>
          </Tabs>
          <p className="text-sm text-gray-500">Search in {env} environment</p>

          <div className="flex space-x-2">
            <Input
              placeholder="Enter username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch}>Search {env}</Button>
          </div>
        </CardContent>
      </Card>

      {userData && renderUserInfo()}

      {metrics && (
        <Card>
          <CardHeader>
            <CardTitle>Media Metrics</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Image className="h-6 w-6 text-blue-500" />
              <p className="text-2xl font-bold">{metrics.totalPhotos}</p>
              <p className="text-sm text-gray-500">Photos</p>
            </div>
            <div className="space-y-1">
              <Film className="h-6 w-6 text-blue-500" />
              <p className="text-2xl font-bold">{metrics.totalVideos}</p>
              <p className="text-sm text-gray-500">Videos</p>
            </div>
            <div className="space-y-1">
              <Users className="h-6 w-6 text-blue-500" />
              <p className="text-2xl font-bold">{metrics.followers}</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="space-y-1">
              <Activity className="h-6 w-6 text-blue-500" />
              <p className="text-2xl font-bold">{metrics.following}</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}