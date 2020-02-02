# function-kick-heated-floor-mat
電気カーペットの電源をいい感じに入れてくれるGCPプロジェクト

## How to use

### First deploy
- Create new project on GCP console.
- `gcloud config set project YOUR_PROJECT_NAME`
- `gcloud pubsub topics create heated-floor-mat`
- `gcloud scheduler jobs create pubsub kick-heated-floor-mat --topic=heated-floor-mat --schedule="0 8-20/6 * * *" --message-body="{}" --time-zone "Asia/Tokyo"`
- `` `npm bin`/tsc index.ts ``
- `gcloud functions deploy kickHeatedFloorMat --runtime nodejs10 --trigger-topic=heated-floor-mat --set-env-vars IFTTT_API_KEY=YOUR_IFTT_API_KEY`

### Deploy to update
- Write some code.
- `` `npm bin`/tsc index.ts ``
- `gcloud functions deploy kickHeatedFloorMat --runtime nodejs10 --trigger-topic=heated-floor-mat --set-env-vars IFTTT_API_KEY=YOUR_IFTT_API_KEY`