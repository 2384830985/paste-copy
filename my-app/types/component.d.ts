import Vue from 'vue';

export declare class AViewUiComponent extends Vue{
    static install (vue: typeof Vue): void
}

export type AViewUiComponentSize = 'large' | 'small' | 'default'

export type AViewUiComponentAlignment = 'left' | 'center' | 'right'
