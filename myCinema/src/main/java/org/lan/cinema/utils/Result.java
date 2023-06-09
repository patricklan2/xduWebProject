package org.lan.cinema.utils;

import java.io.Serializable;


/**
 * @author zrk
 * @version 1.0
 * @date 2020/5/1 0001 11:45
 * 用于携带返回接口请求的数据
 */
public class Result implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 响应业务状态
     */

    private Integer status;

    /**
     * 响应消息
      */

    private String msg;

    /**
     * 响应中的数据
      */

    private Object data;

    /**
     * 构建其他状态的CinemaResult对象，直接用静态方法，不需要额外创建对象了
     */

    public static Result build(Integer status, String msg, Object data) {
        return new Result(status, msg, data);
    }

    public static Result ok(Object data) {
        return new Result(data);
    }

    public static Result ok() {
        return new Result(null);
    }

    public Result() {

    }

    public static Result build(Integer status, String msg) {
        return new Result(status, msg, null);
    }

    public Result(Integer status, String msg, Object data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    public Result(Object data) {
        this.status = 200;
        this.msg = "OK";
        this.data = data;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
