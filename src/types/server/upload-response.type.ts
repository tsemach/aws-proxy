import express from 'express'

export interface UploadResponse<T = any> extends express.Response {
  body: T
}