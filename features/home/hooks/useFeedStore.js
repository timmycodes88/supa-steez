import { create } from 'zustand'

const useFeedStore = create(set => ({
  feed: [],
  setFeed: feed => set({ feed }),
  addFeed: feed => set(state => ({ feed: [...state.feed, ...feed] })),
  removeFeed: feed =>
    set(state => ({ feed: state.feed.filter(f => f.id !== feed.id) })),
  updateFeed: feed =>
    set(state => ({
      feed: state.feed.map(f => (f.id === feed.id ? feed : f)),
    })),
}))

export default useFeedStore
