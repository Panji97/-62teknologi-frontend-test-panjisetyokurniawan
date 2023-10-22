import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import service from '../service/api'

export const getAllBussiness = createAsyncThunk(
  '/getAllBussiness',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoader(true))
      const response = await service.getAllBussiness(
        params.limit,
        params.page,
        params.search,
        params.category,
        params.location,
        params.sort
      )

      if (response) {
        dispatch(
          setChangeVal({
            key: 'totalCount',
            value: response.result.page.totalData,
          })
        )

        dispatch(setLoader(false))
      }

      return response
    } catch (error) {
      dispatch(setLoader(false))
      rejectWithValue(error)
    }
  }
)

export const getDetailBussiness = createAsyncThunk(
  '/getDetailBussiness',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await service.getDetailBussiness(params.id)

      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

const initialState = {
  bussinesItems: [],
  loader: false,
  totalCount: 0,
  detailItems: {},
}

const bussinesSlicer = createSlice({
  name: 'sliceUsers',
  initialState: { ...initialState },
  reducers: {
    setChangeVal: (state, action) => {
      state[action.payload.key] = action.payload.value
    },
    setLoader: (state, action) => {
      state.loader = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBussiness.fulfilled, (state, action) => {
      if (action.payload) {
        state.bussinesItems = action.payload.result.datas
      }
    })
    builder.addCase(getDetailBussiness.fulfilled, (state, action) => {
      if (action.payload) {
        state.detailItems = action.payload.result
      }
    })
  },
})
export const { setChangeVal, setLoader } = bussinesSlicer.actions
export default bussinesSlicer.reducer
