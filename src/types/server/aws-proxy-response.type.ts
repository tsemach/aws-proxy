import express from 'express'

export interface AWSProxyResponse<T = any> extends express.Response {
  body: T
}