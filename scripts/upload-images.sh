#!/bin/bash

# 图床配置
API_KEY="chv_7b6_b54fb89604fe542fae8c10e696808ffd0da5ded8f2c4a1e0a474b3d2084c695a_7b572e58dbb0c4191302e0c4d3e497f426d7366dc1f0c8898dd44bc369ff14e2"
API_URL="https://img.ytools.cc/api/1/upload"

# 检查是否提供了图片文件
if [ $# -eq 0 ]; then
    echo "使用方法: ./upload-images.sh <图片文件>"
    echo "示例: ./upload-images.sh remote-work.jpg"
    exit 1
fi

IMAGE_FILE=$1

if [ ! -f "$IMAGE_FILE" ]; then
    echo "错误: 文件 $IMAGE_FILE 不存在"
    exit 1
fi

echo "正在上传: $IMAGE_FILE"
echo "----------------------------------------"

# 上传图片到图床
response=$(curl -s -X POST \
  -H "X-API-Key: $API_KEY" \
  -F "source=@$IMAGE_FILE" \
  "$API_URL")

# 提取图片 URL
image_url=$(echo "$response" | grep -o '"url":"[^"]*"' | cut -d'"' -f4)

if [ -n "$image_url" ]; then
    echo "✅ 上传成功!"
    echo "图片链接: $image_url"
    echo ""
    echo "可以在文章中使用:"
    echo "image: \"$image_url\""
else
    echo "❌ 上传失败"
    echo "响应: $response"
fi
